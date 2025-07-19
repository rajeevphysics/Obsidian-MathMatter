
>[!summary]
Electric potential energy refers to the amount of work required to bring a charge to some point, always in reference to another point. 
>
**Key equations:**
> 
Electric potential energy general equation:
$\Delta U = -q\int_{a}^{b}{\vec{E} \cdot \vec{ds}}$
>
Electric potential energy of two point charges:
$U=\frac{kqq_0}{r}$

>[!info]+ Read Time
**⏱ 2 mins**

# Definition
Electric potential energy is the energy stored in a system of charges in relation to their position. It's the [[Work|work]] required to bring a [[Charge|charge]] from some reference point (usually infinity) to a specific point against the [[Electric Fields|electric field]]

Mathematically, we define it as the work done on a charge in an electric field over a displacement. With units [[Coulomb|coulomb]]
$$\Delta U = -q\int_{a}^{b}{\vec{E} \cdot \vec{ds}}$$

![[elpe_1.png|400]]
[^1]
>[!note] Explanation
Example of a point charge in an electric field. 
>
The path against the electric field is high potential energy since it would **require a lot of energy** to move that charge against the field.
>
The path towards the electric field is low energy since it would require a **less energy** to move that charge there.

# Deriving Electric Potential Energy
> [!warning] Assumptions
In order to derive the equation for electric potential energy, assume the following:
> - From the definition, the electric potential energy is the work over displacement r $W = \int _a^b \vec{F}\cdot \vec{ds}$
> - The force is the electric field $\vec{F} = q\vec{E}$

$$
\begin{array}{c} \\
W = \int_{a}^b \vec{F} \cdot \vec{ds}  \\
 \\
\vec{F} = q\vec{E} \\
 \\
W = q\int_{a}^b \vec{E}\cdot \vec{ds} \\
 \\
\text{Note that $W = -\Delta U$ so now:}\\
\Delta U = -q \int_{a}^b \vec{E} \cdot \vec{ds}
\end{array}
$$


# Deriving Electric Potential of Point Charge
>[!warning] Assumptions
To derive the electric potential energy of a point charge. Assume the following:
> - The charge is positive
>- The [[Electric Force|electric force]] is $\vec{F} = q\vec{E}$
>- From [[Coulomb's Law|Coulomb's law]] the electric field for a point charge is $E = \frac{q}{4\pi r^2 \epsilon _0}$
>- [[Work|Work]] is $W = \int_r ^{r_f} \vec{F(r)} \cdot \vec{dx}$
>- The [[Electric Fields|electric field]] is constant 

![[elpe_2.png]]
>[!note] Explanation
Work done the electric field is independent of the path it takes (gray dotted lines)
With the force being with the direction of the field 

$$\begin{array}{c}
W = \int_r ^{r_f} F(r) \cdot ds \\ 
W = \int_r ^{r_f}qE \cdot ds \\ 

\\
\text{Remeber $W = -\Delta U$} \\ 
\Delta U = -\int_r ^{r_f}qE \cdot ds  \\ 
\Delta U = -q_1Er \\ 
\Delta U = -q_1 ( \frac{q_2}{4\pi r^2 \epsilon _0}) (r) \\ 
\Delta U = \frac{-q_1 q_2}{4\pi r \epsilon _0}
\end{array}$$

# Resources
<iframe width="560" height="315" src="https://www.youtube.com/embed/j3GrOKre__0?si=ktndbPOJ4wfQg4ZA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/QpVxj3XrLgk?si=E7XATZxY9AeOXBPr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


---

> 💡 Found this concept helpful? [Star Math & Matter on GitHub](https://github.com/rajeevphysics/Obsidan-MathMatter) to support more intuitive science breakdowns like this.

---

[^1]: Taken from https://tikz.net/electric_field/ by  Izaak Neutelings (July 2018)

[^2]: Taken from https://tikz.net/electric_potential_plots/ by  Izaak Neutelings (February 2020)
