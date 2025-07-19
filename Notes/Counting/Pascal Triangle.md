
> [!summary]
Pascal's triangle is an array of numbers whose entry is a binomial coefficient. Each row represents the $nth$ expansion of a binomial and can be used to quickly find the combination of some $nth$ row and $kth$ column. 

>[!info]+ Read Time
**⏱ 2 mins**

# Definition
Pascal's triangle is an array of numbers where each entry is a binomial coefficient.

It's an array of numbers where each number is the sum of the two numbers directly above it. If the sum of the two numbers directly above it is zero, then we assume it as one. In doing so, we get a triangle like the following below.

![[pac_1.png]]
> [!note] Explanation
Pascal's triangle expanded out to the $6 th$ row. Pascal's triangle continues infinitely  

Some other things can also be noticed in this triangle. For example, each row represents the coefficient expansion of $(a+b)^n$ from the [[Binomial Theorem]]. As well we could find our solutions to [[Combinations|combinations]] using this identity with rows and columns. 

# Examples

>[!example] Pascal Triangle for Binomial Expansion
>$$\begin{array}{c}
(a+b)^2 = a^2 + 2ab + b^2 \quad \Rightarrow \text{Row 2: $1,2,1$} \\  
(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^2 \quad \Rightarrow \text{Row 3: $1,3,3,1$}
\end{array}$$

---

> [!example] Determine the solution for $\binom{5}{3}$
Instead of using the [[Combinations|combination]] formula, we can instead look at the $5th$ row $3 rd$ column and get our solution. Which would be 10 from Pascal's triangle.
> 
This lines up with our formula from combinations $\binom{5}{3} = \frac{5!}{3!\cdot 2!}=10$


# Resources
<iframe width="560" height="315" src="https://www.youtube.com/embed/XMriWTvPXHI?si=IoZukU8w1c5ywx_W" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


---

> ✍️ This project’s been a labour of love.  
> If it helped, [give Math & Matter a star](https://github.com/rajeevphysics/Obsidian-MathMatter) and let me know what you'd like to see next.

---
