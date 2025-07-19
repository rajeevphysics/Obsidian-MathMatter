
>[!summary]
Electric potential is the amount of work per unit charge to bring a charge somewhere. Electric potential is a scalar quantity.  
>
**Key equations:**
>
**Electric potential:**
$\Delta V=\frac{\Delta U}{q_0}=-\int_a^b E\cdot ds$
>
**Electric field to a single point charge:**
$V=\frac{kq}{r}$
>
**Electric field inside a conducting sphere:**
$E = \frac{Qr}{4\pi R^3 \epsilon_0}$
>
**Electric potential inside a conducting sphere:**
$V(b) = \frac{Q}{8\pi \epsilon_0 R} (3-\frac{r^2}{R^2})$

>[!info]+ Read Time
**⏱ 4 mins**

# Definition 
Electric potential is described as the amount of [[Work#Work|work]] per unit [[Charge|charge]] to bring a [[Charge|charge]] somewhere. Mathematically it's the [[Electric Potential Energy|electric potential energy]] per charge with units [[Joule|joule]] per [[Coulomb|coulomb]], more commonly called a [[Volt|volt]].

$$
V = \frac{\Delta U}{q_0} 
$$

![[ep_2.png]]
[^1]
>[!note] Explanation
An electric field points down with a positive charge being moved downwards over time.

# Deriving the Electric Potential 
Electric potential refers to the work per unit charge, so by definition, it refers to [[Electric Potential Energy]] per unit charge. 

$$
V = \frac{\Delta U}{q_0} 
$$

Sometimes when referring to electric potential, we want to refer to the change in the [[Electric Fields|electric field]]. The [[Electric Potential Energy#Deriving Electric Potential Energy|derivation of electric potential energy]] uses integration from work, which will be substituted in here.

$$
\begin{array}{c}
\text{From electric potential energy:} \\ 
\Delta U = -\int_r ^{r_f}q \vec{E} \cdot \vec{ds}  \\
\\
\text{From our definition for electric potential above:} \\ 

\frac{\Delta U}{q} = -\int_r ^{r_f} \frac{q \vec{E} \cdot \vec{ds}}{q} \\ 
V = -\int_r ^{r_f} { \vec{E} \cdot \vec{ds}}
\end{array}
$$

## Deriving Electric Potential Due to a Single Point Charge
>[!warning] Assumptions
The electric potential is used to describe the amount of energy the particle has at a given point. 
>
We will assume the following is true:
>- From [[Electric Potential Energy]] $U = \frac{kqq_0}{r}$
>- The electric potential is $\Delta V=\frac{\Delta U}{q_0}$

$$\begin{array}{c}
V = \frac{\Delta U}{q_0} \\ 
\Delta U = \frac{kq q_0}{r} \\ 
V=\frac{kq}{r}
\end{array}$$

# Electric Potential Inside a Conducting Sphere
For a conducting sphere we need to assume the following for electric potential.

>[!warning] Assumptions 
>- Our reference point V(a) is at the surface.
>- Charges are distributed around the surface but not in the actually conductor.

For a conducting sphere all the charge is centred around the surface. The [[Electric Fields|electric field]]inside the sphere is always zero because there is no charge enclosed inside the sphere (By [[Gauss's Law]] the $\vec{E} = 0$). 

$$
\begin{array}{c}
\text{From electric potential $\Delta V = -\int E \cdot ds$} \\ 
V_R - V_0 = -\int E \cdot ds\\ \\
\text{$V_0$ is always zero in the electric field}\\
\text{$V_R$ is the electric field at the surface} \\\\
\text{Since $\Delta V = V_R - V_0$ our $V_R$ will have a value at} \\ \text{the  surface, and hence is always having the same electric potential, till after the surface}
\end{array}
$$

![[ep_1.png]]
[^2]
>[!note] Explanation
Electric potential for a conducting sphere
Note that after were outside the sphere, well assume the sphere as a point mass and so can use $V = kq/r$

## Electric Potential Inside A Non-Conducting Sphere
>[!warning] Assumptions 
For a non-conducintg sphere we will assume the following:
>- For a non-conducting sphere, the charges will be distrubted on the charge density throughout.
>- To find the [[Electric Fields]] we will use [[Gauss's Law]] 
>- Assume a spherical area of Gaussian surface

For a non-conducting sphere the electric field will change depending on how much area you enclose in and how that charge is distrusted.

>[!warning] Assumed equations
We'll assume the density is $\rho = \frac{Q}{\frac{4}{3}\pi R^3}$ and our volume $V = \frac{4}{3}\pi r^3$ 
So our $Q_{enc}$ at any pint is $Q_{enc} = \frac{Q r^3}{R^3}$

So by gausses law our electric field will be:

$$\begin{array}{c}
\oint E \cdot dA = \frac{Q_{enc}}{\epsilon_0} \\ \\
\text{Well assume a spherical area of Gaussian surfrace} \\ \\
E \cdot 4\pi r^2 = \frac{Q_{enc}}{\epsilon_0}   \\ 
E = \frac{Q_{enc}}{4\pi r^2\epsilon_0}  \\ 
E = \frac{Qr}{4\pi R^3 \epsilon_0}
\end{array}$$

>[!bug] Assumption
To find our electric potential were going to assume that our reference point V(a) at the surface is $V(a) = \frac{Q}{4 \pi \epsilon _0 R}$  

so now:

$$\begin{array}{c}
\Delta V = -\int E\cdot ds \\ 
V(b) -V(a) = -\int E\cdot ds \\ 
V(b) = V(a) - \int_r ^R \frac{Qr}{4\pi R^3\epsilon _0} dr \\
\text{Intergrate in terms of r } \\ 
V(b) = \frac{Q}{8\pi \epsilon_0 R} (3-\frac{r^2}{R^2})
\end{array}$$

Our electric field will increase as r from the centre and peaks at R, decreasing as $1/r^2$after.

# Resources
<iframe width="560" height="315" src="https://www.youtube.com/embed/j3GrOKre__0?si=cVDeV64fIAa_sFkx&amp;start=260" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/QpVxj3XrLgk?si=NwjipU2lK2yjUQTa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

> 📚 Like this note? [Star the GitHub repo](https://github.com/rajeevphysics/Obsidan-MathMatter) to support the project and help others discover it!

---

[^1]: Taken from https://tikz.net/electric_field/ by Izaak Neutelings (July 2018)
