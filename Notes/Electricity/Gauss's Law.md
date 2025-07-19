
>[!summary]
Gauss's law is a tool for calculating the amount of flux penetrating an area. 
>
**General equation:**
${\oint \vec{E}\cdot \vec{dA}} = \frac{Q_{enc}}{\epsilon_0}$
>
**Flux:**
$\Phi = \frac{Q_{enc}}{\epsilon_0}$
>
**Enclosed charge:**
$Q_{enc} = \int \lambda \cdot dV$
>
**Inf sheet energy:**
$E =  \frac{\lambda}{2\epsilon_0 }$
>
**Uniform charge line:**
$E = \frac{\lambda }{2\pi r \epsilon_0}$

>[!info]+ Read Time
**⏱ 5 mins**

# Definition 
Gauss' law is a tool useful for finding the flow of [[Electric Fields|electric fields]] through a **closed surface**, usually imaginary. It's to describe the net electric [[Flux|flux]] per enclosed charge.

The general equation is given mathematically by:
$$
\Phi=\oint \vec{E} \cdot \vec{dA} = \frac{Q_{enc}}{\epsilon_0}
$$

We denote it by the [[Closed Integral|closed integral]] to denote that it is integrated through a closed surface. The closed integral is through a [[Gaussian Surfaces|Gaussian surface]] to define our $\vec{dA}$, which is are 3D surface. 

Although always valid, Gauss's law is best used in highly symmetric cases because it relies on symmetry arguments to assume the electric field is always constant along the area.

>[!note]
Our $Q_{enc}$ is the charge enclosed. If we had a object with [[Charge Density|charge density]] integration is required to find $Q_{enc}$

# Deriving Gauss's Law from Coulomb's Law
>[!warning] Assumptions
To derive Gauss' law from [[Coulomb's Law| Coulomb's law]], we need to assume the following:
>- From  [[Coulomb's Law|coulombs law]] the electric field for a point charge is   $E = \frac{q}{4\pi \epsilon R^2}$ 
>- The Gaussian surface is a sphere with area $4\pi R^2$
>- Assume dA and the electric field will always be parallel to each other
>- $\Phi = \oint \vec{E} \cdot \vec{dA}$ (from [[Flux|flux]])

![[gau_3.png|500]]
[^1]
>[!note] Explanation
Example of a Gaussian surface around a point charge a distance R away.

From flux, we know this measurement is true:
$$\begin{align*}
\Phi &= \oint \vec{E} \cdot d\vec{A} \\
     &= \oint \frac{q}{4\pi \varepsilon_0 R^2} \, dA \\
     &= \frac{q}{4\pi \varepsilon_0 R^2} \oint dA \\
     &= \frac{q}{4\pi \varepsilon_0 R^2} \cdot 4\pi R^2 \\
     &= \frac{q}{\varepsilon_0} \\
\Rightarrow\quad \Phi &= \frac{q}{\varepsilon_0} \\
\Phi &= \oint \vec{E} \cdot \vec{dA} \\ 
\oint \vec{E} \cdot \vec{dA} &= \frac{q}{\epsilon_0} 
\end{align*}
$$

# Electric Field for A Infinite Sheet
>[!warning] Assumptions
If we have an infinite sheet and want to find an equation for the electric field. The simplest approach to this is through gauss's law. 
>
We are going to assume the following:
>- There is a **uniform** charge density over the inf sheet ($\lambda$)
>- Our Gaussian surface is a **cylinder** (So the electric field is always constant)
>- The **electric field out the inf sheet is postive**

![[gau_1.png]]
[^2]
>[!note] Explanation
Electric field of a infinite sheet with a Gaussiann surface over a part of it.

First we want to find $Q_{enc}$ 
$$\begin{array}{c} 
Q_{enc}= \int \lambda \cdot dA = \lambda \cdot A \\ 
\text{Note because the charge density is uniform} \\ 
\text{We just needed to intergrate over area}
\end{array}$$
Then we choose a Gaussian surface of a cylinder so the electric is constant

$$\begin{array}{c} 
\oint  E\cdot dA = \frac{Q_{enc}}{\epsilon_0} \\ 
E \oint dA = \frac{Q_{enc}}{\epsilon_0}  \\\\
\text{If we imagine intergrating over this} \\ 
\text{Than there is an electric field point out on both sides, refer to photo above} \\ \\
2EA = \frac{\lambda A}{\epsilon_0} \\ 
E =  \frac{\lambda}{2\epsilon_0 }
\end{array}$$

# Electric Field of A Uniform Charged Line
>[!warning] Assumptions 
If we have an uniform charge line, that has a uniform charge density we can find the electric field the same way using gauss law.
>
Were going to assume that following:
>- **Uniform charge density** ($L$) 
>- $Q_{enc} = \lambda L$ 
>- Were going to use a cylinder Gaussian surface with an area ($A$) of $2\pi r L$

![[gau_2.png]]
[^3]
>[!note] Explanation
Uniforms charged line with a gaussian surface over it. 

Since we already assumed $Q_{enc}$ were just going to integrate to find the electric field using our known cylinder Guassian area.

$$\begin{array}{c}
\oint \vec{E} \cdot \vec{dA} = \frac{Q_{enc}}{\epsilon_0} \\ 
\text{Assume a cylinder as gassian surface} \\ 
E \oint dA =  \frac{Q_{enc}}{\epsilon_0} \\ 
E A = \frac{Q_{enc}}{\epsilon_0} \\ 
E\cdot 2\pi rL = \frac{\lambda L}{\epsilon_0} \\ 
E = \frac{\lambda }{2\pi r \epsilon_0}
\end{array}$$

# Resources 
<iframe width="560" height="315" src="https://www.youtube.com/embed/htjxMwHKuyI?si=uVauU1nDgHvnRW4N" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/f2Cccp6XBUY?si=WkfGhB4BGB7SiMoa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


---

> 💡 Found this concept helpful? [Star Math & Matter on GitHub](https://github.com/rajeevphysics/Obsidan-MathMatter) to support more intuitive science breakdowns like this.

---


[^1]: Taken from https://tikz.net/electric_field_sphere/ by Izaak Neutelings (Februari, 2020)

[^2]: Taken from https://tikz.net/electric_field_plane/ by Izaak Neutelings (November, 2018)

[^3]: Taken from https://tikz.net/electric_field_rod/ by Izaak Neutelings (July 2018)
