

> [!summary]
Small angle approximation is an approximation of the value of theta at a small angles
> 
**Key Equations:**
> 
For small angles:
$\sin(\theta) \approx \theta \approx \tan(\theta)$

>[!info]+ Read Time
**⏱ 1 min**

# Definition 
Small angle approximation is an approximation for minimal angles the value of the angle remains the same. In this approximation, you assume that the distance between two points and the circle is so small that they are basically equal. Which means that the value of $\theta$ is equal as well.

#  Derivation
> [!warning] Assumptions
To derive the small angle approximation, assume the image below as a reference as well as the following:
> - The definition of a [[Limits|limit]] is $\displaystyle\lim_{ x \to n } f(x)$
![[saa_1.png|300]]

$$
\begin{array}{c}
\text{We want to find the distance ($h$) between $A$ and $B$ relating the angle $\theta$.} \\
\\
\text{We can relate this in three way, but well only use two (for later)}: \\
\\
\sin(\theta) = \frac{h}{r}  \\
\tan(\theta) = \frac{h}{(r-x)}
\\
\\
\text{Using these two related equation solve for h} \\
(1) \quad r\sin(\theta) = h \\
(2) \quad (r-x)\tan(\theta) = h \\ 
\\
(1)=(2) \\
r\sin(\theta) = (r-x)\tan(\theta)\\ \\
\text{If the distance between A and B was smaller, $x$ and $\theta$ would be smaller, so} \\
\displaystyle \lim_{ \theta \to 0 } x = 0 \\ 
\\
\text{So the realted equation would become} \\ 
r\sin(\theta) \approx r\tan(\theta) \\ 
\sin(\theta) \approx \tan(\theta) \\ \\
\text{or}\\
\sin(\theta) \approx \theta \approx \tan(\theta)
\end{array}
$$


# Resources
<iframe width="560" height="315" src="https://www.youtube.com/embed/rdN1oxtds8U?si=m5LbGp_9A5vlAWCu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


---

> ✍️ This project’s been a labour of love.  
> If it helped, [give Math & Matter a star](https://github.com/rajeevphysics/Obsidian-MathMatter) and let me know what you'd like to see next.

---
