
>[!info]+ Read time
**⏱ 5 mins**
# Proof of Factorials (Combinatoric justification )
Factional is the amount of way you can rearrange a thing. Often when we look for factional we are looking the possible way to rearrange a number from n to zero.

>[!bug] Note
Factorials care about position, so order matter!

If we wanted to rearrange Bob (B), Cat(C) & Sander (S) the following possibilities are true:
$BCS, BSC, CBS, CSB, SBC, SCB$

Another example is the possible way to rearrange Bob (B) & Cat (C) where the following is true:
$BC, CB$

The last example is the possible is to rearrange (although possible for any set of numbers) is to rearrange just Bob, where the following is true:
$B$

A mathematical way we could do this is by noticing the possible combinations.

In the first example, for each possibility at the start there are 3 possible choices, after which only 2 is possible then 1.

Meaning at the start there were 3 choices, after which was chosen leaving 2 choices, then 1.

Notice that this is true for any of the examples, in the second example the possible choices that could have been made are 2 choices at the start then 1.
## Formal Definition
Mathematically we can describe this as
$$
n! =
\begin{cases}
1, & \text{if } n = 0 \\
n \cdot (n-1)!, & \text{if } n > 0
\end{cases}

$$

