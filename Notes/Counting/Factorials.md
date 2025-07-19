
> [!summary]
Factorials are a way of counting. They are defined as the combinations you can arrange some nth number of people, where order matters.
> 
Key equation:
> $$
n! =
\begin{cases}
1, & \text{if } n = 0 \\
n \cdot (n-1)!, & \text{if } n > 0
\end{cases}
> $$

>[!info]+ Read time
**⏱ 2 mins**

# Definition 
Factional is the number of ways you can rearrange a thing where you care about order.

# Combinatorial Justification of Factorials 
If we wanted to rearrange Bob (B), Cat(C) & Sander (S) the following possibilities are true:
$BCS, BSC, CBS, CSB, SBC, SCB$

Another example is the possible way to rearrange Bob (B) & Cat (C) where the following is true:
$BC, CB$

The last example is that it is possible to rearrange (although possible for any set of numbers) is to rearrange just Bob, where the following is true:
$B$

A mathematical way we could do this is by noticing the possible combinations.

In the first example, for each possibility at the start of each combination there are 3 possible choices, after which only 2 is possible, then 1. 

Meaning that at the start there were 3 choices, after which one was chosen, leaving 2 choices, then 1.

Notice that this is true for any of the examples. In the second example, the possible choices that could have been made are 2 choices at the start, then 1.
## Formal Definition
Mathematically, we can describe this as

$$
n! =
\begin{cases}
1, & \text{if } n = 0 \\
n \cdot (n-1)!, & \text{if } n > 0
\end{cases}

$$

> [!bug] Why does 0! = 1 (Combinational justification)
Remember how we derived our formal definition; we used deductive logic to count how many ways we could arrange some people, where order mattered.
> 
The same goes for showing how 0! = 1.
If we had no one, and wanted to count the different ways we could move around no one, the result is that we can't do anything. Which is exactly 1 thing.

## Mathematical Proof of Factorial Definition
> [!warning] Assumption
Will use [[Mathematical Induction|mathematical induction]] to prove our formal definition above. 

Claim: $n! = n\cdot (n-1)!$ for $n\in \mathbb{N} \space |\space n \geq 1$ Assume that the [[Natural Numbers|natural number]] starts from 1

$$
\begin{array}{c}
\text{Base case ($n=1$)} \\ 1! = 1! \cdot 0! =1 \\
\\
\text{Assume it hold for some value $k$} \\ 
k! = k!\cdot (k-1)! \\
\\
\text{Now for $k+1$, inductive hypothesis} \\
(k+1)! = (k+1)! \cdot (k+1-1)! \\
(k+1)! = (k+1)! \cdot k! \\
(k+1)! = (k+1)\cdot k!  \cdot (k-1)!\\ \\

\text{Using our definition at the the start:}\\
(k+1)! = (k+1)! \cdot (k+1 -1)! \\
(k+1)! = (k+1)! \cdot k! \\
(k+1)! = (k+1)\cdot k!  \cdot (k-1)!

\\\\
\text{Inductive and definition are both the same therfore this definition is valid}
\end{array}
$$

