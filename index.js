const antlr4 = require("antlr4/index");
const CircLexer = require("circ/gen/CircLexer").CircLexer;
const CircParser = require("circ/gen/CircParser").CircParser;
const ast = require("circ/frontend").ast;
const exec = require("circ/interpreter").exec;
const fs = require("fs");

const source = fs.readFileSync("./index.circ", "utf8");
const input = new antlr4.InputStream(source);
const lexer = new CircLexer(input);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new CircParser(tokens);
parser.buildParseTrees = true;

const astTree = ast(parser);
exec(astTree, (out) => {
});
