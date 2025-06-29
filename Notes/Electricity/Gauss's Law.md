
>[!summary]
Gausses law is calculating the amount of flux penetrating a area. 
>
**General equation:**
${\oint \vec{E}\cdot \vec{dA}} = \frac{Q_{enc}}{\epsilon_0}$
>
**Flux:**
$\phi = \frac{Q_{enc}}{\epsilon_0}$
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
**⏱ 4 mins**

# Deriving Gauss's Law from Coulombs Law
>[!warning] Assumptions
To derive gauss law from coulombs law well assume a spherically symmetric imagery surface a distance R away from a point charge centred in the middle.
>
We will also assume the following:
The equations from [[Flux]] are true as well.
Assume that the total $E = \frac{q}{4\pi \epsilon R^2}$ 
Assume the total area is $4\pi R^2$
Assume dA and electric field will always be parallel to each other


![[gau_3.png|500]]
[^1]
>[!note] Explanation
Example of a gaussian surface around a point charge a distance R away.

From flux, we know this measurement is true:
$$\begin{align*}
\Phi &= \oint \vec{E} \cdot d\vec{A} \\
     &= \oint \frac{q}{4\pi \varepsilon_0 R^2} \, dA \\
     &= \frac{q}{4\pi \varepsilon_0 R^2} \oint dA \\
     &= \frac{q}{4\pi \varepsilon_0 R^2} \cdot 4\pi R^2 \\
     &= \frac{q}{\varepsilon_0} \\
\Rightarrow\quad \Phi &= \frac{q}{\varepsilon_0}
\end{align*}
$$

# General Equation
>[!warning] General Assumption
In order to simplify solving the general equation we want to choose some 3D surface that force the electric field to always be constant. 

The general equation is the following 
$$\oint \vec{E}\cdot \vec{dA}=\frac{Q_{enc}}{\epsilon_0}$$
>[!bug] Note
Our [[Flux]] ($\phi$) is defined by the closed integral $\oint \vec{E} \cdot \vec{dA}$ we we can also define this as. 
$$\phi = \frac{Q_{enc}}{\epsilon_0}$$
 
Our $Q_{enc}$ is the charge enclosed. If there is a surface charge density in the area enclosed we need to integrate in order to find Q
$$Q_{enc} = \int \lambda \cdot dV$$
If the charge density is uniform, than this simplifies to:
$$Q_{enc} = \lambda \cdot V$$

## Differences between Gauss's law and Flux
**Gauss's law** is for situations where the **surface** you are **enclosing** is **open** (sheet). Take a note on how gauss's law was derived.

**Flux** on the other hand is for defining how much of something flows through something. This implies for situations where there is a **closed surface** (box)

# Electric Field for A Infinite Sheet
>[!warning] Assumptions
If we have an infinite sheet and want to find an equation for the electric field. The simplest approach to this is through gauss's law law. 
>
We are going to assume the following:
>- There is a **uniform** charge density over the inf sheet ($\lambda$)
>- Our Gaussian surface is a **cylinder** (So the electric is always constant)
>- The **electric field out the the inf sheet is postive**

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
Then we choose a Gaussiann surface of a cylinder so the electric is constant

$$\begin{array}{c} 
\oint  E\cdot dA = \frac{Q_{enc}}{\epsilon_0} \\ 
E \oint dA = \frac{Q_{enc}}{\epsilon_0}  \\
\text{If we imagine intergrating over this} \\ 
\text{Than there is an electric field point out on both sides} \\ 
2EA = \frac{\lambda A}{\epsilon_0} \\ 
E =  \frac{\lambda}{2\epsilon_0 }
\end{array}$$

# Electric Field of A Uniform Charged Line
>[!warning] Assumptions 
If we have an uniform charge line, that has a uniform charge density we can find the electric field the same way.
>
Were going to assume that following:
>- **Uniform charge density** present 
>- $Q_{enc} = \lambda L$ 
>- Were going to use a cylinder Gaussian surface with an area of $2\pi r L$

![[gau_2.png]]
[^3]
>[!note] Explanation
Uniforms charged line with a gaussian surface over it. 

Since we already assumed Q enclosed were just going to integrate to find the electric field using our known cylinder area.

$$\begin{array}{c}
\oint \vec{E} \cdot \vec{dA} = \frac{Q_{enc}}{\epsilon_0} \\ 
\text{Assume a cylinder as gassian surface} \\ 
E \oint dA =  \frac{Q_{enc}}{\epsilon_0} \\ 
E A = \frac{Q_{enc}}{\epsilon_0} \\ 
E\cdot 2\pi rL = \frac{\lambda L}{\epsilon_0} \\ 
E = \frac{\lambda }{2\pi r \epsilon_0}
\end{array}$$
# Extra Resources 
For more explanations are more general derivations of gauss law through coulombs' law I suggest [this video](https://www.youtube.com/watch?v=htjxMwHKuyI&ab_channel=AndreyK) 



[^1]: Taken from https://tikz.net/electric_field_sphere/ by Izaak Neutelings (Februari, 2020)

[^2]: Taken from https://tikz.net/electric_field_plane/ by Izaak Neutelings (November, 2018)

[^3]: Taken from https://tikz.net/electric_field_rod/ by Izaak Neutelings (July 2018)

---

> 💡 Found this concept helpful? [Star Math & Matter on GitHub](https://github.com/rajeevphysics/Obsidan-MathMatter) to support more intuitive science breakdowns like this.

---
