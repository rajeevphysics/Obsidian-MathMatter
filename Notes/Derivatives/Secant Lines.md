
> [!summary]
A secant line is a line that touches at least two points on a curve.
> 
**Key equations:**
> 
Slope of a secant line:
> $$
\text{slope} = \frac{\text{change in } y}{\text{change in } x}
= \frac{f(a+h) - f(a)}{(a+h) - a}
= \frac{f(a+h) - f(a)}{h}
> $$
> 
Equation of a secant line:
$f(x) = f (a )+ \frac{f (a+h) - f (a)}{h} (x-a)$

>[!info]+ Read Time
**⏱ 3 mins**

# Definition 
A secant line is defined as a line that touches two points (the line itself can touch more than two points, but our definition just cares about two). By definition, the slope of a secant line is the [[Rate of Change|rate of change]] between two points.

![[sec_1.png|350]]
[^1]
> [!note] Explanation
Example of a secant line touching a curve at two points, A and B
 
By definition, the slope of a secant line is the [[Rate of Change|rate of change]] of two points. However, we often generalize this in terms of a reference point $a$ and a distance from the reference called $h$

> [!warning] Definition assumptions
Using the image above, let point 1 be at point A and point 2 be at point B, where:
> $$
\begin{array}{c}
\text{Point 1}: (a, f(a)) \\
\text{Point 2}: (a+h, f(a+h))
\end{array}
> $$

So now our definition mathematically is:
$$

\text{slope} = \frac{\text{change in } y}{\text{change in } x}
= \frac{f(a+h) - f(a)}{(a+h) - a}
= \frac{f(a+h) - f(a)}{h}

$$

> [!bug] Where did $a$ and $h$ come from?
In math, we often like to describe secant lines in terms of a reference point.
>
So let point A (from the image at the start of this note) be the point $(a,f(a))$, then we assume that our distance from point A and point B is a distance $h$ away. This allows us to define point B as $(a+h, f(a+h))$

## Equation of a Secant Line
> [!warning] Assumptions
Will use the following notion to simplify our equation:
> - Let $y_{2} = f(x), y_{1} = f(a), x_{2} = x, x_{1} = a$
> - So now our [[Point-Slope Form Equation of a Line|point-slope form ]] of an equation of a line can be written as: $f(x)-f(a) =m(x-a)$
> - Slope is $= \frac{f(a+h) - f(a)}{h}$

Now we can write our equation of a secant line as:

$$
\begin{array}{c}
f(x) - f(a) = \frac{f(a+h) - f(a)}{h} (x-a) \\
\\
\text{We often write it in this notion} \\
f(x) = f(a )+ \frac{f(a+h) - f(a)}{h} (x-a) 
\end{array}
$$


---

> 💡 Found this concept helpful? [Star Math & Matter on GitHub](https://github.com/rajeevphysics/Obsidian-MathMatter) to support more intuitive science breakdowns like this.

---



[^1]: Adapted from https://www.integral-domain.org/lwilliams/Resources/TikzImg/secant.tex
