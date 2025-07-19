
> [!summary]
A tangent line is the limit of a secant line as the distance between two points A and B reduces to zero.
> 
**Key equation:**
> 
Slope of a tangent line:
> 
$\displaystyle \lim_{ h\to 0 } \frac{f (a+h) - f (a)}{h}$
> 
Equation of a Tangent Line:
$f(x) = f(a) + f'(a)(x-a)$

>[!info]+ Read Time
**⏱ 3 mis**

# Definition 
The slope of a tangent line is the [[Limits|limit]] of a [[Secant Lines|secant line]] as $P$ approaches $A$. This slope is sometimes called the [[Instantaneous|instantaneous]] [[Rate of Change|rate of change]] at a point $A$ (shown below)

<div style="display: flex; gap: 10px;">
  <img src="tl_1.png" alt="Image 1" width="45%">
  <img src="tl_2.png" alt="Image 2" width="45%">
</div>
> [!note] Explanation
Secant line with point P and point A. As the distance between point P and A decreases (as P approaches A) it creates a tangent line

> [!warning] Assumption
From the image above, assume the horizontal distance between $P$ and $A$ to be called $h$
 To align with with our distance from the equation in [[Secant Lines|secant line]] ($\frac{f(a+h) - f(a)}{h}$)

$$
\begin{array}{c}
\text{If our tangent line is the limit as our distance from P and A go to zero, then:}  \\
\displaystyle \lim_{ h\to 0 } \frac{f(a+h) - f(a)}{h}  
\end{array}
$$

> [!bug] Common Misconception
A common misconception is that the definition of a tangent line is a line that touches a curve at exactly 1 point. This is technically wrong; refer to the resources below.

## Equation of a Tangent Line
Notice from the image above that our tangent line is straight. So we could use 
[[Point-Slope Form Equation of a Line|point slope form]] for lines to find the equation of a tangent line.

> [!warning] Assumptions
To make our equation of a tangent line easier to look at let's assume this notion:
> - Use the notion that $y_{2} = f(x), y_{1} = f(a),x_{2} = x, x_{1} = a$ to simplify notion 
> - Slope  $=m=f'(a) = \displaystyle \lim_{ h\to 0 } \frac{f (a+h) - f (a)}{h}$ 
> - $f(x)-f(a) = m(x -a )$ from [[Point-Slope Form Equation of a Line|point slope form]]

Notice that $f'(a)$ is our slope so just using point slope form we can just make this equation.
$$
\begin{array}{c}
f(x) - f(a) = f'(a)(x-a) \\ \\ \text{We often like it in this notion below to make math later easier} \\
f(x) = f(a) + f'(a)(x-a)
\end{array}
$$

# Resources
<iframe width="560" height="315" src="https://www.youtube.com/embed/O_cwTAfjgAQ?si=MUYidx69DcA3UkpH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


