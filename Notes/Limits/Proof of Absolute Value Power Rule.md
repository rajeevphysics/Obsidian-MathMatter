
> [!summary]
This proof uses definitions from the absolute product rule to prove the power rule
> 
**Key Result:**
$|x^n|=|x|^n \quad n\in \mathbb{Z^+}$

>[!info]+ Read Time
**⏱ 1 min**

# Mathematical Proof
> [!warning] Assumptions
To prove the power rule by [[Mathematical Induction|proof by induction]], assume the following:
> - $n$ is a positive [[Integers|integer]] 
> - The [[Proof of the Absolute Value Multiplication Rule|product rule]] is $|ab| = |a| \cdot|b|$

Prove that $|x^n|=|x|^n \quad n\in \mathbb{Z^+}$

$$
\begin{array}{c}
\text{Base case n=0}: \\
|x^0| = 1 \quad |x|^0 = 1  \\
 \\
\text{Assume it holds for n=k}: \\
|x^k| = |x|^k  \\
 \\
\text{Show it holds for $n=k+1$}:\\
\begin{align*}
|x^{k+1}| &= |x^k| \cdot |x| \\
&\overset{\text{IH}}{=}  |x|^k \cdot |x| \\
&\overset{\text{{PR}}}{=} |x|^{k+1}
\end{align*}
\\\\
\text{Therefore this hold for $n\geq 0$}
\end{array}
$$


---

> 📚 Like this note? [Star the GitHub repo](https://github.com/rajeevphysics/Obsidian-MathMatter) to support the project and help others discover it!

---
