
> [!summary]
Coulomb's law describes the electric field produced by a point charge and can explain the interactions of point charges
>
**Key equation:**
>
Electric field by a point charge:
$E = \frac{q}{4\pi R^2 \epsilon _0}$

>[!info]+ Read Time
**⏱ 3 mins**

# Definition 
Coulomb’s Law describes the electrostatic force between two point [[Charge|charges]]. It shows that the force is proportional to the product of the charges. This law also underlies how point charges generate [[Electric Fields|electric fields]] and interact through those fields. Mathematically it is defined below.

$$
E = \frac{q}{4 \pi \epsilon_0 r^2}
$$

# Deriving Coulomb's Law Using Experimental Foundations & Dimensional Analysis 
Historically and physically, Coulomb's law was derived from experiment, but we can justify the result from experiment using [[Dimensional Analysis|dimensional analysis]] and some reasoning.

>[!warning] Assumptions 
Assume the field from a point charge only depends on:
>- Distance ($r$)
>- Charge ($q$)
>- Vacuum permittivity ($\epsilon_0$)

Using the dimensional analysis, we want to get some equation in the form of an electric field.
$$
E = \frac{[F]}{[q]} = \frac{[M][L]}{[T^2] [Q]}
$$
>[!note] 
$[\epsilon_0] = [Q^2][M]^{-1}[L]^{-3}[T]^{2}$  

$$
\begin{array}{c}
\text{Assume the form of our electric field is in this form} \\
E =\frac{q}{\epsilon_0 r^n} \\ 
[E] = \frac{[q]}{[\epsilon_0][] r^n]} \\ 
\frac{[M][L]}{[T^2] [Q]} = \frac{[Q]}{[Q^2][M]^{-1}[L]^{3}[T]^{2} [L]^n  } \\ 
\\\frac{[M][L]}{[T^2] [Q]} = \frac{M}{[Q][T]^2 [L]^{3-n}} \\ 
\\
\text{All dimensions work upset [L]} \\ 
1 = 3-n \\ 
2 = n \\\\ \text{So now the dimensions work out returning to our equation:} \\

E = \frac{q}{\epsilon_0 r^2} 
\end{array}
$$
Note that the actual equation is the following below, but the constants don't have dimensions by dimensional analysis and are found from experimental analysis 
$$
E = \frac{q}{4 \pi \epsilon_0 r^2}
$$

# Deriving Coulomb's Law from Gauss's Law 
>[!warning] Assumptions 
In order to derive the general principle for Coulomb's Law well find the [[Electric Fields|electric field]] produced at any point from a stationary point [[Charge|charge]].
>
We will do this using [[Gauss's Law]] and [[Flux]]
>
Well assume the following:
>- There is a point charge
>- Gaussian surface is symmetric (assume its a spherical Gaussian surface)
>- Total area is $4\pi R^2$ (sphere)
>- Normal vector from electric field and $\vec{dA}$ are in the always same direction


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
<iframe width="560" height="315" src="https://www.youtube.com/embed/X_CHPTZfUGo?si=VbfHVYBLbLEiuwj1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
</iframe>


---

> 📚 Like this note? [Star the GitHub repo](https://github.com/rajeevphysics/Obsidian-MathMatter) to support the project and help others discover it!

---


[^1]: Taken from https://tikz.net/electric_field_sphere/ by Izaak Neutelings (Februari, 2020)
