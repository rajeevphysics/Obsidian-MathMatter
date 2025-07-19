
> [!summary]
Combinations count the different ways to rearrange a big group into a smaller group, with order not mattering.
> 
**Key equations:**
> 
Combinations:
$\binom{n}{k} = \frac{n!}{k!\cdot (n-k)!}$

>[!info]+ Read Time
**⏱ 1 min**

# Definition 
Combinations are a counting system. They count the number of ways you can rearrange a set, with order not mattering. Often, when referring to combinations, we have an original big set and count the ways of rearranging to get a smaller set.

# Combinatorial Justification of Combinations  
Suppose we had a set {a, b, c}. We want to count the rearrangements we can have with 2 of the 3 letters inside this set, with order not mattering. Meaning {a, b} = {b, a}

Manually, our total combinations of 2 of the 3 numbers are {a, b}, {b, c} & {a, c}.

Mathematically, we could have also found this out by taking the total combinations of the original set being 3!. Dividing these total combinations by the total possibilities to rearrange the set we care about, which are 2 of the 3 (or 2!). But because we also don't care about order, we need to take into account that the arrangement we didn't choose would be found from (3-2)!

## Generalization 
> [!warning] Assumptions
> To generalize the example above, assume the following:
> - The total number of entries in a set is $n$
> - The total number of entries in each solution is $k$

$$
\binom{n}{k} = \frac{n!}{k!\cdot (n-k)!} = \frac{\text{All full orderings}}{\text{Arragments of what we picked}\times \text{rearragments we ignored }}
$$

**We say $\binom{n}{k}$ as n choose k.**





