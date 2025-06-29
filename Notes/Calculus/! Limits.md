

>[!info]+ Read Time
**⏱ 4 mins**
# Deriving a Derivative Limit
Suppose we have a function and choose some point to look at the rate of change. Denoted by dx for x change and dy for y change.

Mathematically we say this as $$\underbrace{\frac{dy}{dx}}_{\text{Rate of Change}}$$
>[!note] 
When we say "dx as it approaches 0" we mean as dx get very small close to 0 but never zero.

![[lim_2.png | 300]]
>[!note] Explanation
Rate of change at x = 2 described on a $x^2$ function.

>[!warning] Assumption
In the example above often we don't know what our tangent function is. We only know our original function ($x^2$) and the point where our tangent function meets our original function at 2

Since we don't know our dx or dy we need to come up with a expression that represents this.

So we look at the limit as we force dx to approach 0 (never reaching zero) 
$$\lim_{dx \to 0} \frac{dy}{dx} $$
However this is still incomplete, we don't know dy

So we need to make something to determine or change in dy.

To do this we look at original function moved to the point of intersection + our change in dx then subtracting that amount by our function at x. Looking something like this:
$$dy =f(x+dx) - f(x) $$
Whatever this difference from this is our dy.

Adding what we know we get the following solution:
$$\frac{dy}{dx} = \lim_{dx \to 0}\frac{dy}{dx} = \lim_{dx \to 0} \frac{f(x+dx) - f(x)}{dx}$$


>[!bug] Important Note
Limit and Derivative Limits are not the same
>
**Limits** are when you see the **behaviour** of a **function** as it **approach a value**
>
**Derivative** limits are the **rate of a change** of a function as **dx approaches zero**.
# Deriving a Limit
In derivative limits we didn't actually know what dx nor dy was, and found a way to describe them in terms of our original function.

However, if we **knew** what the function was (in our example we knew $x^2$ was our original function)

We could determine the limit of our known function to determine its behaviour near and at a point.

![[lim_3.png | 400]]
>[!note] Explanation
The limit of our function $x^2$ as you approach to a point $x = 2$ from the top and bottom.

To determine the behaviour near and at a point we will do the following:
$$\begin{array}{c}
\text{Limit from the left}\\
\lim_{x \to 2^+} (x^2)\\\\

\text{Limit from the right} \\ 
\lim_{x \to 2^-} (x^2) \\ 

\\

\text{Limit at the point} \\
\lim_{x \to  2} (x^2) \\\\

\text{[Note we used notation above a limit to show the direction]}
\end{array}$$
Determining the behaviour in these three directions allows us to determine the behaviour of a function as it approach and reaches a point.

**In the example above**, the limit **as we approached the point from the right would result in the following**:
$$\lim_{x \to 2^+} (x^2) = 4$$
As well the limit from the left would result in:
$$\lim_{x \to 2^-} (x^2) = 4$$

And at the point would result in:
$$\lim_{x \to 2} (x^2) = 4$$
Notice that our limit from the left, right, and at the point all exist and are the same so this limit exist. Which we could argue by the graph, all limits as you approach 2 will result in 4.

However there are situations where this is not true like in the example below.

![[Screenshot 2025-06-26 at 8.41.40 PM.png]]
>[!note] Explanation
Example of a discontinuous limit, red lines show our limit form the left and right as you approach 2

In the example above when we perform our limits we get the following result (Note we dont need to find the equations to perform this limit, we can just use the graph).

$$\begin{array}{c}
\lim_{x \to 2^-} 2x = 4
\\\\
\lim_{x \to 2^+} x+1 = 3 \\ 
\\
\lim_{x \to 2^+} \Rightarrow \text{Does Not Exist }
\end{array}$$
The limit as we approach 2 does not exist graphically because there is a hole at 2, but mathematically because the limit from the left and right are different 

## Generalization
We can generalize the solution for our limits depending on key characteristics.

If:
$$\begin{array}{c}
lim_{x \to h^-} f(x) = a \\
lim_{x \to h^+} f(x) = b \\

\\
\text{If a = b then and only then:}
\\
lim_{x \to h} f(x) = c
\\

\text{If this is true then the limit exist} \\ \\

\text{If $a\neq b$ then $lim_{x \to h} f(x) = c$ does not exist}
\end{array}$$

# Extra Resources
In explaining the concept of limits I found this video by [3blue1brown helpful](https://www.youtube.com/watch?v=kfF40MiS7zA&t=127s&ab_channel=3Blue1Brown)


---

> 🧠 Enjoy this walkthrough? [Support Math & Matter](https://github.com/rajeevphysics/Obsidan-MathMatter) with a star and help others learn more easily.

---
