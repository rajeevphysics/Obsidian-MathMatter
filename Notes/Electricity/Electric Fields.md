
> [!summary]
The electric field is a vector field of how a positive test charge would experience in every point in space.
> 
**Key equations:**
>
**Force per charge:**
$E=\frac{F}{q}$
>
**Electric field for a uniform charged line:**
$E = \frac{kQ}{x(x^2+a^2)^{1/2}}$
>
**Electric field for a uniform charged ring:**
$E = \frac{kQx}{(x^2 + a^2)^{3/2}}$
>
**Electric field for a uniform charged disk:**
$E = \frac{2kQx}{R^2}(\frac{1}{x}-\frac{1}{\sqrt{x^2 + R^2}})$

>[!info]+ Read Time
**⏱ 6 mins**

# Definition 
The electric field is a vector field that tells you the [[Forces|force]] per unit of [[Charge|charge]] a **positive** test [[Charge|charge]] would experience at every point in space. 

$$
\vec{E}=\frac{\vec{F}}{q}
$$

![[efield_1.png|400]]
[^1]
>[!note] Explanation
Example of the electric field inside a [[Conductors|conducting sphere.]] 

# Deriving Electric Fields in a Conductor
> [!warning] Assumptions
In finding an electric field inside [[Conductors|conductors]], assume the following:
> - A [[Batteries|battery]] will create a [[Potential Difference|potential difference]] and create an [[Electric Fields|electric field]], $E = \frac{F}{q}$
> -  The [[Electric Potential|electric potential]] is described by $V = \frac{W}{q}$ or $W = Vq$
> - Classical [[Work|work]] is described as $W = F\cdot d$

$$
\begin{array}{c}
\text{From the definition of work:} \\
(1)\quad W = F\cdot d  \\
 \\
\text{From electric potential:} \\
(2)\quad W = Vq  \\
 \\
(1)\Rightarrow (2) \\
Vq = F\cdot d \\
F = \frac{Vq}{d} \\
 \\
\text{From our definition of electric field} \\
E = \frac{F}{q} = \frac{V}{d}
\end{array}
$$
The result is an equation to describe the electric field as a change in electric potential over a distance.

# Deriving the Electric Field of Uniform Charged Line
If we wanted to find the electric field of a uniformly charged line some distance $x$ away. We could find this by using our definition of Electric fields and some integration techniques.

>[!warning] Assumptions 
For this we are going to assume the following:
>- Spilt the whole length of $Q$  into two segments $a$ , and $-a$. Where $a$ starts from origin to the positive end of the charged line, and $-a$ starts from origin to the negative end of the charged line
>- Because we spilt it into two section the Y components from both ends will cancel out in every point, so we only need to worry about the x direction
>- The charge density is $\rho = \frac{dq}{dl}$ and $\rho = Q / 2a$

![[ef_1.png]]

We need to find $dq$ so we find that from

$$\begin{array}{c} 
\rho = \frac{dq}{dl} \\ 
\frac{Q}{2a} = \frac{dq}{dl} \\ 
\frac{Q}{2a} dl = dq
\end{array}$$

Now we find a small chunk of $dE$.
Note that the $r$ direction is the hypotenuse of the $x$ and $y$ component.

$$\begin{array}{c} 
dE = k \frac{dq}{r^2}\\
dE = k \frac{Qdy}{2a(x^2+y^2)} \\ \\
\text{Note because the y direction of dE will always cancel out} \\ 
\text{We only consider the x compment of dE} \\ \\
dE_x = dEcos(\alpha) \\ 
dE_x = \frac{kQxdy}{2a(x^2 + y^2)^{3/2}}\\\
E = \int_{-a} ^ a dE_x  \\ 
E = \frac{kQ}{x(x^2+a^2)^{1/2}}

\end{array}$$
# Deriving the Electric Field Due to a Uniform Charged Ring
If we now have a ring of charge $Q$ and want to find a the electric field at some point $x$. We can find this using our definitions of electric fields and some integration.

>[!warning] Assumptions 
To do this assume the following:
>- The ring is centred around the axis, so that the electric field at any point in the y-axis will always cancel for charges along the x-axis
>- The charges around the ring are uniform
>- The charge density ($\rho$) is $\rho = Q / L = Q \ 2\pi a$ if we assume the radius is a 
>- Note that the charge density is also the rate of chage of our charges over distance.

![[ef_2.png]]

Our $dq$ of charges can be solved from knowing the charge density

$$\begin{array}{c} 
\rho = \frac{dq}{dl} \\ 
\rho = \frac{Q}{2\pi a} \\ \\
so:
\\ 
dq = \rho dl \\dq = \frac{Q}{2\pi a} dl \\
\text{Because our charge is a ring} \\ \\
L = a\phi \\ 
dl = ad\phi \\ 
dq = \frac{Qad\phi}{2\pi a}
\end{array}$$

>[!bug] Symmetry Argument 
Since we now know our $dq$ we can solve for $dE$ in the $x$ direction. Note that the $y$ direction of an electric field will always cancel because we are using the symmetry argument that our ring is centre around the axis.

$$
\begin{array}{c}
dE = k \frac{dq}{r^2} \\ 
dE = \frac{kQd\phi}{2\pi (x^2 + a^2)} \\
dE_x = dEcos(\theta) \\ 
dE_x = \frac{kQxd\phi}{2\pi (x^2 + a^2)^{3/2}}\\ 
\text{Than we intergrate over the ring in term of $d\phi$} \\ 
E = \int dE_x \\ 
E = \frac{kQx}{2\pi (x^2 + a^2)^{3/2}}\int_0 ^{2\pi} d\phi \\ 
E = \frac{kQx}{(x^2 + a^2)^{3/2}}
\end{array}
$$

# Deriving the Electric field for a Uniform Charged Disk
If we have a charge uniformly distributed over a disk and want the electric field over some distance along the x-axis, we can again use our definitions from electric field and some integration to solve this.

>[!warning] Assumptions 
Were going to assume the following:
>- Our charge density $\rho$ is defined as the Total charge / Total area and is the rate of change of our charge.
>- If the disk is centred around the origin, we're going to assume that the electric will cancel out in the y-direction.

![[ef_3.png]]

To find $dQ$ we do:
$$\begin{array}{c}
\rho = \frac{dq}{dA} \\ 
\rho = \frac{Q}{\pi R^2}\\
dq = \rho dA  \\ 
dq = dA \frac{Q}{\pi R^2} \\ 
\text{Note that $A = \pi r^2 $} \\ 
dq = \frac{2\pi Q rdr}{\pi R^2}
\end{array}$$

Then our electric field is, note that r is the hyp distance (from disk to x position), and we will assume it is ($x^2 +y^2$) by pythagorean theorem. 

$$\begin{array}{c} 
dE = \frac{kdq}{r^2}  \\ 
dE = \frac{kdq}{(x^2+y^2)^2}\\
dE_x = dEcos(\theta) \\ 
dE_x = \frac{kdq}{(x^2+y^2)^{3/2}} \\ 
dE_x = \frac{2kxQrdr}{R^2(x^2+y^2)^{3/2}} \\ 
E = \int dE_x \\
E = \frac{2kQx}{R^2}(\frac{1}{x}-\frac{1}{\sqrt{x^2 + R^2}})
\end{array}$$
# Resources
<iframe width="560" height="315" src="https://www.youtube.com/embed/bEqe3kaDZKU?si=x2OPMuMz7P21ugPd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

> 💡 Found this concept helpful? [Star Math & Matter on GitHub](https://github.com/rajeevphysics/Obsidan-MathMatter) to support more intuitive science breakdowns like this.

---

[^1]: Taken from https://tikz.net/electric_field_plots/ by Izaak Neutelings (Februari, 2020)
