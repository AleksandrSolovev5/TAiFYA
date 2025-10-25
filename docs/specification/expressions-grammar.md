# Грамматика выражений языка

## Синтаксис выражений

Выражения могут содержать:

- Литералы чисел (целые и с плавающей точкой)
- Унарные и бинарные операторы
- Вызовы встроенных функций
- Скобки для группировки выражений
- Идентификаторы переменных и констант
- Логические/сравнительные выражения

---

## Операторы

### Арифметические операторы

| Символы | Операция              | Ассоциативность |
| ------- | --------------------- | --------------- |
| `+`     | Сложение              | Левая           |
| `-`     | Вычитание             | Левая           |
| `*`     | Умножение             | Левая           |
| `/`     | Деление               | Левая           |
| `%`     | Остаток               | Левая           |
| `//`    | Целочисленное деление | Левая           |
| `**`    | Возведение в степень  | Правая          |

### Операторы сравнения

| Символы           | Операция    |
| ----------------- | ----------- |
| `==`              | Равенство   |
| `!=`              | Неравенство |
| `>` `<` `>=` `<=` | Сравнения   |

### Логические операторы

| Символы | Операция                |
| ------- | ----------------------- |
| `!`     | Логическое НЕ (унарное) |
| `&&`    | Логическое И            |
| `\|\|`  | Логическое ИЛИ          |

---

## Приоритет операторов (в порядке убывания приоритета)

| Приоритет (по убыванию) | Операторы                   |
| ----------------------- | --------------------------- |
| 7                       | `()` (группировка)          |
| 6                       | `**`                        |
| 5                       | `+` `-` `!` (унарные)       |
| 4                       | `*` `/` `//` `%`            |
| 3                       | `+` `-` (бинарные)          |
| 2                       | `>` `<` `>=` `<=` `==` `!=` |
| 1                       | `&&` `\|\|`                 |

---

## Встроенные функции

**Функции:** `abs(x)`, `min(...)`, `max(...)`, `round(x)`, `floor(x)`, `ceil(x)`.  

---

## Грамматика (EBNF — диалект ISO)

```ebnf
(* Корневое правило *)
program = { statement } ;

(* ----- Инструкции ----- *)
statement =
      variable_declaration
    | assignment
    | function_declaration
    | if_statement
    | while_loop
    | for_loop
    | return_statement
    | print_statement
    | expression_statement
    ;

variable_declaration = "let", identifier, "=", expression, ";" ;
assignment = identifier, "=", expression, ";" ;

function_declaration = "func", identifier, "(", [ parameter_list ], ")", block ;
parameter_list = identifier, { ",", identifier } ;

return_statement = "return", [ expression ], ";" ;
print_statement = "print", "(", [ expression_list ], ")", ";" ;
expression_statement = expression, ";" ;

if_statement = "if", "(", expression, ")", block, [ "else", block ] ;
while_loop = "while", "(", expression, ")", block ;

for_loop = "for", "(", [ for_init ], ";", [ expression ], ";", [ expression ], ")", block ;
for_init = "let", identifier, "=", expression ;

block = "{", { statement }, "}" ;

(* ----- Выражения ----- *)
expression = logical_or ;
logical_or = logical_and, { "||", logical_and } ;
logical_and = equality, { "&&", equality } ;
equality = comparison, { ("==" | "!="), comparison } ;
comparison = additive, { (">" | "<" | ">=" | "<="), additive } ;
additive = multiplicative, { ("+" | "-"), multiplicative } ;
multiplicative = exponentiation, { ("*" | "/" | "//" | "%"), exponentiation } ;
exponentiation = unary, [ "**", exponentiation ] ;
unary = [ "+" | "-" | "!" ], primary ;

primary =
      NUMBER
    | STRING
    | "true"
    | "false"
    | identifier
    | function_call
    | "(", expression, ")" ;

function_call = identifier, "(", [ expression_list ], ")" ;
expression_list = expression, { ",", expression } ;

identifier = ( letter | "_" ), { letter | digit | "_" } ;
```
