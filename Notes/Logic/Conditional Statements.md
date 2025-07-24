
>[!summary]
A conditional statement is a proposition which a statement is in the form "If A then B" (Although doesn't need to written in this form)
>
We call A the hypothesis and B the conclusion. 
>
**Key equation:**
>
Conditional statement:
$A \to B$

>[!info]+ Read Time
⏱ **3 mins**

# Definition
A conditional statement is a [[Propositions|proposition]] which is most often a statement in the form "**If** A **then** B" where A and B are propositions. Sometimes we call A the hypothesis and B the conclusion of a conditional statement.[^1] 

Mathematically, we write "If A then B" as $$A \to B$$
>[!note] 
Conditional statements don't always need to be in the form "If A then B". We know if a statement is a conditional statement if it implied that a conclusion follows from a hypothesis
>
**If** a wire carries current, then **it** produces a magnetic field (If A then B) can be written as:
>- A write produces a magnetic field **whenever** it carries a current
>-  **All** current carrying wires produce a magnetic field
>- The fact that a wire carries current **implies** that it produces a magnetic field
>- Producing a magnetic field is the **consequence** of a wire carrying wire

As a truth table, our conditional statements will look like this:

| $A$   | $B$   | $A \to B$ |
| ----- | ----- | --------- |
| True  | True  | True      |
| True  | False | False     |
| False | True  | True      |
| False | False | True      |

>[!bug] When are conditional statements false?
Conditional statements are only false in one case: when the hypothesis is true, but the conclusion is false

The [[Negation|negation]] of a conditional statement is not another conditional statement; rather, it is the proposition $A \land \neg B$. 

Notice the difference between the negation of this conditional statement and without (above) as a truth table (are the opposite truth values of $A \to B$)

| $A$   | $B$   | $A \land \neg B$ |
| ----- | ----- | ---------------- |
| True  | True  | False            |
| True  | False | True             |
| False | True  | False            |
| False | False | False            |
## Examples
Here are examples of conditional statements on a table. Notice the hypothesis and conclusion in each statement.

| Statement                                     | Hypothesis                 | Conclusion            |
| --------------------------------------------- | -------------------------- | --------------------- |
| If a number is divisible by 2 then it is even | A Number is divisible by 2 | The number is even    |
| All humans are mortal                         | Someone is human           | They are mortal       |
| Any student who studies passes their exams    | Student who studies        | They pass their exams |

---

> 🧠 Enjoy this walkthrough? [Support Math & Matter](https://github.com/rajeevphysics/Obsidian-MathMatter) with a star and help others learn more easily.

---

[^1]: Definition adapted from Dr. Robert Talbert
