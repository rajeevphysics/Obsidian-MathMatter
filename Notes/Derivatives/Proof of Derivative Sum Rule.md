
> [!summary]
This proof uses definitions from derivatives to prove the sum rule.
> 
**Key Result:**
$\frac{d}{dx}[f (x)+g (x)] = \frac{d}{dx}f (x)+\frac{d}{dx}g (x)$

>[!info]+ Read Time
**⏱ 1 min**

# Mathematical Proof
> [!warning] Assumptions
To prove the sum rule using [[Direct Proof|direct proof]] assume the following:
> - The definition of a [[Derivatives|derivative]] is $\frac{dy}{dx} =  f'(x) = \displaystyle \lim_{ h \to 0 } \frac{f(x+h)-f(x)}{h}$

Prove that $\frac{d}{dx}[f (x)+g (x)] = \frac{d}{dx}f (x)+\frac{d}{dx}g (x)$.

$$
\begin{array}{c} 
\text{From the definition of a derivative:} \\ \\
\begin{align*}
\frac{d}{dx}[f(x)+g(x)] &=\displaystyle \lim_{ h \to 0 } \frac{[f(x+h)+g(x+h)]-[f(x)+g(x)]}{h}   \\
&= \displaystyle \lim_{ h \to 0 } \frac{f(x+h)-f(x)+g(x+h)-g(x)}{h} \\
&= \displaystyle \lim_{ h \to 0 } \frac{f(x+h)-f(x)}{h}+ \displaystyle \lim_{ h \to 0 } \frac{g(x+h)-g(x)}{h}
\end{align*} \\ \\

\text{Then by definition $\frac{d}{dx}[f (x)+g (x)] = \frac{d}{dx}f (x)+\frac{d}{dx}g (x)$}


\end{array}
$$

# Resources
<iframe width="560" height="315" src="https://www.youtube.com/embed/sca0v-gVcMo?si=2mFKFgnaqZq3EY6O" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


---

> 📚 Like this note? [Star the GitHub repo](https://github.com/rajeevphysics/Obsidian-MathMatter) to support the project and help others discover it!

---
