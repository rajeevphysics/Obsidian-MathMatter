
>[!summary]
Coulombs law describe the electric field produced by a point charge and can explain the interactions of points charges
>
**Key equation:**
>
Electric field by a point charge:
$E = \frac{q}{4\pi R^2 \epsilon _0}$

>[!info]+ Read Time
**⏱ 2 mins**
# What is Coulomb's Law
Coulombs law describes the force and interactions of particles. It explains and proves that point charges will produce an electric field and tells you how particles should and will interact with one another. 

# Deriving Coulombs Law Using Experimental Foundations and Dimensional Analysis 
Historically and physically coulombs law was derived from experiment, but we can justify the result from experiment using [[Dimensional Analysis|dimensional analysis]] and some reasoning.

>[!warning] Assumptions 
Assume the field from a point charge only depends on:
>- Distance ($r$)
>- Charge ($q$)
>- Vacuum permittivity ($\epsilon_0$)

Using dimensional analysis we want our dimensions to be in the form 
$$
E = \frac{N}{C} = \frac{kg\cdot m}{s^2 \cdot C}
$$
The dimensions of $\frac{q}{\epsilon_0}$ are:
$$
\begin{array}{c}
[\epsilon_0] = \frac{C^2}{N\cdot m^2} \\ 
[q] = C \\
[\frac{q}{\epsilon_0}] = \frac{C}{\epsilon_0} = \frac{C}{C^2\cdot N^{-1} \cdot m^{-2}} = \frac{N\cdot m^2}{C}
\end{array}
$$
Now we need to find something in the form  to eliminate that $m^2$ with dimensions L. So we can justify we need a $r^2$ in the bottom for the dimensions to work for the electric field. Thus returning to the statement:
$$
E = \frac{q}{4 \pi \epsilon_0 r^2}
$$
>[!note] Where did the $4\pi$ come from?
The only to justify have $4\pi$ in this scenario is from experimental proof, since this unit is dimensionless and doesnt effect our dimension proof

# Deriving Coulombs Law from Gauss's Law (Point Charge)
>[!warning] Assumptions 
In order to derive the general principle for columbs law well find the electric field produced at any point from a stationary point charge.
>
Well assume the following:
>- There is a point charge
>- Gaussian surface is symmetric 
>- Total area is $4\pi R^2$
>- Normal vector from electric field and dA are in the same direction
>- Equations from [[Gauss's Law]] are true 
>- Equations from [[Flux]] are true 

![[gau_3.png|500]]
[^1]
>[!note] Explanation
Point charge with a Gaussian surface surrounding it. There is a electric field produced by the point charge.

$$\begin{array}{c}
\Phi = \oint E\cdot dA \\ 
\Phi = E\oint dA \\ 
\Phi = EA \\ 
\Phi = E(4\pi R^2) \\ 
\\
\text{By gauss's Law} \\ 
\Phi = \oint E\cdot dA = \frac{q}{\epsilon_0}
\\
E(4\pi R^2) =  \frac{q}{\epsilon_0} \\ 
E = \frac{q}{4\pi R^2 \epsilon _0}
\end{array}$$


# Resources
<iframe width="560" height="315" src="https://www.youtube.com/embed/X_CHPTZfUGo?si=VbfHVYBLbLEiuwj1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>



---

> 📚 Like this note? [Star the GitHub repo](https://github.com/rajeevphysics/Obsidian-MathMatter) to support the project and help others discover it!

---


[^1]: Taken from https://tikz.net/electric_field_sphere/ by Izaak Neutelings (Februari, 2020)
