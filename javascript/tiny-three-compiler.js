function isNumber(token) {
  return !isNaN(token);
}
function isOperator(token) {
  return "*/+-".indexOf(token) !== -1;
}

function Compiler() {}

Compiler.prototype.compile = function (program) {
  return this.pass3(this.pass2(this.pass1(program)));
};

Compiler.prototype.tokenize = function (program) {
  // Turn a program string into an array of tokens.  Each token
  // is either '[', ']', '(', ')', '+', '-', '*', '/', a variable
  // name or a number (as a string)
  var regex = /\s*([-+*/\(\)\[\]]|[A-Za-z]+|[0-9]+)\s*/g;
  return program
    .replace(regex, ":$1")
    .substring(1)
    .split(":")
    .map(function (tok) {
      return isNaN(tok) ? tok : tok | 0;
    });
};

Compiler.prototype.pass1 = function (program) {
  var tokens = this.tokenize(program);

  function getNextToken() {
    token = tokens.shift();
  }
  function precedenceIsNotGreater(o1, o2) {
    var precedences = {
      "/": 4,
      "*": 3,
      "+": 2,
      "-": 1,
    };
    return precedences[o1] <= precedences[o2];
  }

  var token;
  var outputQueue = [];
  var operatorStack = [];
  var args = [];

  do {
    getNextToken();
    if (token === "[") {
      for (getNextToken(); token !== "]"; getNextToken()) {
        args.push(token);
      }
    } else if (isNumber(token) || args.includes(token)) {
      outputQueue.push(token);
    } else if (isOperator(token)) {
      var o1 = token;
      for (
        var o2 = operatorStack[operatorStack.length - 1];
        operatorStack.length &&
        isOperator(o2) &&
        precedenceIsNotGreater(o1, o2);
        o2 = operatorStack[operatorStack.length - 1]
      ) {
        outputQueue.push(operatorStack.pop());
      }
      operatorStack.push(o1);
    } else if (token === "(") {
      operatorStack.push(token);
    } else if (token === ")") {
      for (
        var nextOperator = operatorStack[operatorStack.length - 1];
        operatorStack.length && nextOperator !== "(";
        nextOperator = operatorStack[operatorStack.length - 1]
      ) {
        outputQueue.push(operatorStack.pop());
      }
      operatorStack.pop();
    }
  } while (tokens.length);

  while (operatorStack.length) {
    outputQueue.push(operatorStack.pop());
  }

  var output;

  function getNextOutput() {
    output = outputQueue.pop();
  }

  function buildAst(outputQueue) {
    getNextOutput();
    var node = {};

    if (isNumber(output)) {
      node.op = "imm";
      node.n = output;
    } else if (args.includes(output)) {
      node.op = "arg";
      node.n = args.indexOf(output);
    } else if (isOperator(output)) {
      node.op = output;
      var b = buildAst(outputQueue);
      var a = buildAst(outputQueue);
      node.a = a;
      node.b = b;
    }
    return node;
  }
  return buildAst(outputQueue);
};

Compiler.prototype.pass2 = function (ast) {
  function reduceTree(ast) {
    if (ast.op === "imm" || ast.op === "arg") {
      return ast;
    }
    ast.a = reduceTree(ast.a);
    ast.b = reduceTree(ast.b);

    if (ast.a.op === "imm" && ast.b.op === "imm") {
      var n = Function("return " + "" + ast.a.n + ast.op + ast.b.n)();
      return { op: "imm", n: n };
    }
    return ast;
  }
  return reduceTree(ast);
};

Compiler.prototype.pass3 = function (ast) {
  var operatorMap = {
    "+": "AD",
    "-": "SU",
    "*": "MU",
    "/": "DI",
  };

  var operationDepths = {};
  var maxDepth = -Infinity;

  function markDepth(ast, depth = 0) {
    if (ast.a && ast.b) {
      maxDepth = Math.max(maxDepth, depth);
      if (!operationDepths[depth]) {
        operationDepths[depth] = [];
      }
      operationDepths[depth].push(ast);
      markDepth(ast.a, depth + 1);
      markDepth(ast.b, depth + 1);
    }
  }
  markDepth(ast);
  var asm = [];

  var currentDepth = maxDepth;
  while (currentDepth >= 0) {
    currentDepthOperations = operationDepths[currentDepth];
    while (currentDepthOperations.length) {
      var currentOperation = currentDepthOperations.shift();

      if (currentOperation.b.op === "imm") {
        asm.push("IM " + currentOperation.b.n);
      } else if (currentOperation.b.op === "arg") {
        asm.push("AR " + currentOperation.b.n);
      } else {
        asm.push("PO");
      }

      asm.push("SW");

      if (currentOperation.a.aop === "imm") {
        asm.push("IM " + currentOperation.a.n);
      } else if (currentOperation.a.op === "arg") {
        asm.push("AR " + currentOperation.a.n);
      } else {
        asm.push("PO");
      }

      asm.push(operatorMap[currentOperation.op]);

      asm.push("PU");
    }
    currentDepth--;
  }
  return asm;
};
