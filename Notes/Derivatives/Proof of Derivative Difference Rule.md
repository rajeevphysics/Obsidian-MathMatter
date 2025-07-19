
> [!summary]
This proof uses the definition of a derivative to prove the difference rule
> 
**Key Result:**
$\frac{d}{dx}[f (x)-g (x)] = \frac{d}{dx}f (x)-\frac{d}{dx}g (x)$

>[!info]+ Read Time
**⏱ 1 min**

# Mathematical Proof
> [!warning] Assumptions
To prove the difference rule using [[Direct Proof|direct proof]] assume the following:
> - The definition of a [[Derivatives|derivative]] is $\frac{dy}{dx} =  f'(x) = \displaystyle \lim_{ h \to 0 } \frac{f(x+h)-f(x)}{h}$

Prove that $\frac{d}{dx}[f (x)-g (x)] = \frac{d}{dx}f (x)-\frac{d}{dx}g (x)$

$$
\begin{array}{c} 
\text{From the definition of a derivative:} \\ \\
\begin{align*}
\frac{d}{dx}[f (x)-g (x)] &=\displaystyle \lim_{ h \to 0 } \frac{[f (x+h)-g (x+h)]-[f (x)-g (x)]}{h}   \\
&= \displaystyle \lim_{ h \to 0 } \frac{f (x+h)-f (x)-[g (x+h)-g (x)]}{h} \\
&= \displaystyle \lim_{ h \to 0 } \frac{f (x+h)-f (x)}{h}- \displaystyle \lim_{ h \to 0 } \frac{g (x+h)-g (x)}{h}
\end{align*} \\ \\

\text{Then by definition $\frac{d}{dx}[f (x)-g (x)] = \frac{d}{dx}f (x)-\frac{d}{dx}g (x)$}


\end{array}
$$


---

> ✍️ This project’s been a labour of love.  
> If it helped, [give Math & Matter a star](https://github.com/rajeevphysics/Obsidian-MathMatter) and let me know what you'd like to see next.

---
