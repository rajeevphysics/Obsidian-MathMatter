
> [!summary]
This proof uses definitions of derivatives and the binomial theorem to prove the power rule.
> 
Key result:
$\frac{d}{dx}x^n = nx^{n-1}$

>[!info]+ Read Time
**⏱ 1 min**

# Mathematical Proof 
> [!warning] Assumptions 
To prove the power rule of [[Derivatives|derivatives]] through [[Direct Proof|direct proof]], assume the following:
> - The the expansion of  $(x+y)^n$ using the [[Binomial Theorem|binomial theorem]] is $(x+y)^n = x^n + \binom{n}{1}x^{n-1}y^1+ \binom{n}{2}x^{n-2}y^2+\dots +y^n$
> - The definition of a derivative is $\frac{dy}{dx} =  f'(x) = \displaystyle \lim_{ h \to 0 } \frac{f(x+h)-f(x)}{h}$

$$
\begin{array}{c}
\text{Prove that $\frac{d}{dx}x^n = nx^{n-1}$ }\\
\\
\text{From the definition of a derivative}\\
\frac{d}{dx}x^n = \displaystyle \lim_{ h \to 0 } \frac{(x+h)^n -x^n}{h} \\
\\
(x+h)^n = x^n+ nx^{n-1}h+\binom{n}{2}x^{n-2}h^2 + \dots +h^n \\ \\

\begin{align*}
\displaystyle \lim_{ h \to 0 } \frac{(x+h)^n -x^n}{h} &=  \displaystyle \lim_{ h \to 0 }  \frac{ x^n+ nx^{n-1}h+\binom{n}{2}x^{n-2}h^2 + \dots +h^n+x^n}{h} \\

&= \displaystyle \lim_{ h \to 0 }  \frac{ \cancel{x^n}+ nx^{n-1}h+\binom{n}{2}x^{n-2}h^2 + \dots +h^n+\cancel{x^n}}{h} \\

&= \displaystyle \lim_{ h \to 0 }  \frac{\cancel{h}(nx^{n-1} + \binom{n}{2}x^{n-2}h + \dots +h^{n-1} }{\cancel{h}}\\

&= \displaystyle \lim_{ h \to 0 } (nx^{n-1} + \binom{n}{2}x^{n-2}h + \dots +h^{n-1})
\\
&= nx^{n-1}
\end{align*}
\\ \\ \\
\text{Therefore from our definition of a derivative} \\
\frac{d}{dx}x^n = nx^{n-1}
\end{array}
$$

# Resources
<iframe width="560" height="315" src="https://www.youtube.com/embed/JjOndio6-g4?si=G5rGkkA7aJy6ZsQt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


---

> 🧪 Think this could help someone else? [Star Math & Matter on Github](https://github.com/rajeevphysics/Obsidian-MathMatter) to help more learners discover it.

---
