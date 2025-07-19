
> [!summary]
This proof uses the definition of a limit to prove the constant multiple rule.
> 
**Key Result:**
$\frac{d}{dx}[C\cdot F(x)] = C\cdot F'(x)$

>[!info]+ Read Time
**⏱ 1 min**

# Mathematical Proof
> [!warning] Assumptions
To prove the derivative of a constant and a function using [[Direct Proof|direct proof]] assume the following:
> - The definition of a [[Derivatives|derivative]] is $\frac{dy}{dx} =  f'(x) = \displaystyle \lim_{ h \to 0 } \frac{f(x+h)-f(x)}{h}$

Prove that $\frac{d}{dx}[C\cdot F(x)] = C\cdot F'(x)$

$$
\begin{align*}
\frac{d}{dx}[C\cdot F(x)]  &= \displaystyle \lim_{ h \to 0 } \frac{C \cdot f(x+h)- C\cdot f(x)}{h} \\
&=\displaystyle C \cdot\lim_{ h \to 0 } \frac{ f(x+h)- \cdot f(x)}{h} \\ 
&= C \cdot F'(x)

\end{align*}
$$


---

> 📚 Like this note? [Star the GitHub repo](https://github.com/rajeevphysics/Obsidian-MathMatter) to support the project and help others discover it!

---
