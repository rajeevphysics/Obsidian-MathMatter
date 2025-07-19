
> [!summary]
This proof uses definitions of a limit and derivative to prove the chain rule.
> 
Key Result:
$\frac{d}{dx}[f(g(x))] = f'(g(x))\cdot g(x)$

>[!info]+ Read Time
**⏱ 2 mins**

# Mathematical Proof
> [!warning] Assumptions
To prove the derivative of a chain of functions through [[Direct Proof|direct proof]] assume the following:
> - The definition of a [[Derivatives|derivative]] is $\frac{dy}{dx} =  f'(x) = \displaystyle \lim_{ h \to 0 } \frac{f(x+h)-f(x)}{h}$
> - The [[Analytical Limits Rules|limit product rule]] is $\displaystyle \lim_{ x \to a } [f(x)\cdot g(x)]=\displaystyle \lim_{ x \to a } f(x )\cdot \displaystyle \lim_{ x \to a }g(x)$

Prove that $\frac{d}{dx}[f(g(x))] = f'(g(x))\cdot g(x)$

$$
\begin{array}{c}
\frac{d}{dx}f(g(x)) = \displaystyle \lim_{ h \to 0 } \frac{f(g(x+h))-f(g(x))}{h} \\
 \\
\text{Multiply top and bottom by $g(x+h)-g(x)$}\\
=\displaystyle \lim_{ h \to 0 } \frac{f(g(x+h))-f(g(x))}{h}\cdot \frac{g(x+h)-g(x)}{g(x+h)-g(x)} \\ 
\\
\text{Using the limit product rule we can configure to:}\\
\displaystyle \lim_{ h \to 0 } \frac{f(g(x+h))-f(g(x))}{g(x+h)-g(x)}\cdot\displaystyle \lim_{ h \to 0 }  \frac{g(x+h)-g(x)}{h} 
\\ \\
\displaystyle \lim_{ h \to 0 } \frac{f(g(x+h))-f(g(x))}{g(x+h)-g(x)}\cdot g'(x) \\ 
\\
\text{Let $k=g(x+h)-g(x)$} \\
\text{By rearanged the let statment}\\
g(x)+k = g(x+h) \\ \\ \\
\text{As $h\to 0, k \to 0$, so now:} \\

\displaystyle \lim_{ k \to 0 } \frac{f(g(x)+k)-f(g(x))}{k}\cdot g'(x) 
\\ \\
\text{By definition of a limit this is }\\
f'(g(x))\cdot g'(x)
\end{array}
$$

# Resources
<iframe width="560" height="315" src="https://www.youtube.com/embed/m0LZX19DyyI?si=pnVk0nhIprGkVrg4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


---

> 📂 Want to see more structured notes like these?  
> Help grow the project by [starring Math & Matter on GitHub](https://github.com/rajeevphysics/Obsidian-MathMatter).

---
