
> [!summary]
This proof uses the definition of a derivative to prove the product rule.
> 
Key Result:
$\frac{d}{dx}[f(x)\cdot g(x)] = f'(x)g(x)+f(x)g'(x)$

>[!info]+ Read Time
**⏱ 2 mins**

# Mathematical Proof
> [!warning] Assumptions
To prove the derivative product rule through [[Direct Proof|direct proof]], assume the following:
> - The definition of a [[Derivatives|derivative]] is $\frac{dy}{dx} =  f'(x) = \displaystyle \lim_{ h \to 0 } \frac{f(x+h)-f(x)}{h}$
> - The [[Analytical Limits Rules|sum of two limits]] is $\displaystyle \lim_{ x \to a } [f (x)+g (x)]=L+M$
> - The product of two limits is $\displaystyle \lim_{ x \to a } [f(x)\cdot g(x)]=L\cdot M$

Prove $\frac{d}{dx}[f(x)\cdot g(x)] = f'(x)g(x)+f(x)g'(x)$

$$
\begin{array}{c}
\frac{d}{dx}[f(x)\cdot g(x)]  = \displaystyle \lim_{ h \to 0 } \frac{f(x+h)g(x+h)-f(x)g(x)}{h} \\ \\ \\
\text{Add and subtract the limit by $f(x+h)g(x)$ so the limit is now:}\\
 = \displaystyle \lim_{ h \to 0 } \frac{f(x+h)g(x+h)-f(x+h)g(x)+f(x+h)g(x)-f(x)g(x)}{h} \\
 \\
 \text{Split into two limits}\\
 = \displaystyle \lim_{ h \to 0 } \frac{f(x+h)g(x+h)-f(x+h)g(x)}{h} + \displaystyle \lim_{ h \to 0 } \frac{f(x+h)g(x)-f(x)g(x)}{h} \\
 =  \displaystyle \lim_{ h \to 0 } f(x+h)\frac{g(x+h)-g(x)}{h} + \displaystyle \lim_{ h \to 0 } g(x)\frac{f(x+h)-f(x)}{h} \\ \\
 \text{Spread limit and simplify to get the following:}\\
 = f(x)\displaystyle \lim_{ h \to 0 } \frac{g(x+h)-g(x)}{h} + \displaystyle g(x)\lim_{ h \to 0 } \frac{f(x+h)-f(x)}{h} \\ \\
 \text{Which is saying:} \\
 f(x)g'(x)+ g(x)f'(x)
\end{array}

$$


# Resources
<iframe width="560" height="315" src="https://www.youtube.com/embed/kNhYfmC_UPU?si=R71WzhalQsOMRbOG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


---

> 📂 Want to see more structured notes like these?  
> Help grow the project by [starring Math & Matter on GitHub](https://github.com/rajeevphysics/Obsidian-MathMatter).

---
