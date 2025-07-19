
> [!summary]
This proof uses the definition of derivatives and limits rules to prove the quotient rule.
> 
Key Result:
$\frac{d}{dx} \left[  \frac{f(x)}{g(x)}  \right] = \frac{f'(x)g(x)-f(x)g'(x)}{[g(x)]^2}$

>[!info]+ Read Time
**⏱ 2 mins**

# Mathematical Proof
> [!warning] Assumptions
To prove the derivative quotient rule using [[Direct Proof|direct proof]] assume the following:
> - The definition of a [[Derivatives|derivative]] is $\frac{dy}{dx} =  f'(x) = \displaystyle \lim_{ h \to 0 } \frac{f(x+h)-f(x)}{h}$
> - The [[Analytical Limits Rules|limit sum rule]] is $\displaystyle \lim_{ x \to a } [f (x)+g (x)]=L+M$ 
> - The [[Greatest Common Divisor (gcd)|greatest common denominator]] of $\frac{\frac{f (x+h)}{g (x+h)}-\frac{f (x)}{g (x)}}{h}=\frac{f(x+h)g(x)-f(x)g(x+h)}{g(x+h)g(x)h}$

Prove $\frac{d}{dx} \left[  \frac{f(x)}{g(x)}  \right] = \frac{f'(x)g(x)-f(x)g'(x)}{[g(x)]^2}$

$$
\begin{array}{c} \\
\frac{d}{dx} \left[ \frac{f(x)}{g(x)} \right] = \displaystyle \lim_{ h \to 0 } \frac{\frac{f(x+h)}{g(x+h)}-\frac{f(x)}{g(x)}}{h}  \\
= \displaystyle \lim_{ h \to 0 } \frac{f(x+h)g(x)-f(x)g(x+h)}{g(x+h)g(x)h} \\
 \\
\text{Using the limit sum rule spilt the limit into two parts:} \\
\displaystyle \lim_{ h \to 0 } \frac{1}{g(x+h)g(x)}\cdot \displaystyle \lim_{ h \to 0 } \frac{f(x+h)g(x)-f(x)g(x+h)}{h}  \\
 \\
\text{Simplify the second limit by adding and subtracting by $f(x)g(x)$} \\
\begin{align*}
 &=  \displaystyle \lim_{ h \to 0 } \frac{f(x+h)g(x)-f(x)g(x+h)+ f(x)g(x)-f(x)g(x)}{h} \\
 &=   \displaystyle \lim_{ h \to 0 } \frac{g(x)f(x+h)+g(x)f(x)}{h} - \displaystyle \lim_{ h \to 0 } \frac{f(x)g(x+h)+f(x)g(x)}{h} \\ 
 &= g(x) \displaystyle \lim_{ h \to 0 }  \frac{f(x+h)+f(x)}{h} - f(x)\displaystyle \lim_{ h \to 0 } \frac{g(x+h)+g(x)}{h} 
\end{align*}
\\ \\
\text{So combining the first and second term:}
\\
\displaystyle \lim_{ h \to 0 } \frac{1}{g(x+h)g(x)} \cdot \left[g(x) \displaystyle \lim_{ h \to 0 }  \frac{f(x+h)+f(x)}{h} - f(x)\displaystyle \lim_{ h \to 0 } \frac{g(x+h)+g(x)}{h} \right] \\
\\
\text{By definition this becomes} \\
\frac{g(x)f'(x)-f(x)g'(x)}{[g(x)]^2}
\end{array}
$$

# Resources
<iframe width="560" height="315" src="https://www.youtube.com/embed/jxxzbMxihjQ?si=KzNQOWNiejPb7RzM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


---

> 📂 Want to see more structured notes like these?  
> Help grow the project by [starring Math & Matter on GitHub](https://github.com/rajeevphysics/Obsidian-MathMatter).

---
