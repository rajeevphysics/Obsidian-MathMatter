
> [!summary]
Permutations count the different ways you can arrange a smaller set from a big set, with order mattering. 
> 
**Key Equations:**
> 
Permutations equation:
$P (n, k) = \frac{n!}{(n-k)!}$

>[!info]+ Read Time
**⏱ 1 min**

# Definition 
Permutations are a type of counting tool. It counts the different ways you can rearrange a set, with order mattering. When referring to permutations, it's similar to having a group of people and counting the arrangements of rearranging a small amount of the group, with order mattering.

## Combinatorial Justification of Permutations
Suppose we had a set {a, b, c} and wanted to count the number of ways to rearrange two of the three letters in this set. We care about the order they are rearranged, so the solutions would be:

{a, b}, {b, a}, {b, c},{c, b}, {a, c},{c, a}

Mathematically, we could have also found this by taking the total arrangements possible, being 3!. Then dividing our total arrangements by the arrangements we ignored, which was 1 letter in each solution, or (3-2)!. 

## Generalization 
> [!warning] Assumptions
To generalize the example above, assume the following:
> - The total number of entries in a set is $n$  
> - The total number of entries we want in each solution is to be $k$. 

$$
P(n,k) = \frac{n!}{(n-k)!}
$$


---

> 💡 Found this concept helpful? [Star Math & Matter on GitHub](https://github.com/rajeevphysics/Obsidian-MathMatter) to support more intuitive science breakdowns like this.

---
