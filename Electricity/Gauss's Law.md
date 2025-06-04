

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
# General Equation and Flux
The general form of the equation is the following, where you want to choose some 3D surface that makes the electric field constant.

$$\oint \vec{E}\cdot \vec{dA}=\frac{Q_{enc}}{\epsilon_0}$$
Note that our [[Flux]] ($\phi$) is defined by the closed integral $\oint \vec{E} \cdot \vec{dA}$ we we can also define this as. 
$$\phi = \frac{Q_{enc}}{\epsilon_0}$$
 
Our $Q_{enc}$ is the charge enclosed. If there is a surface charge density in the area enclosed we need to intergrate in order to find Q
$$Q_{enc} = \int \lambda \cdot dV$$
If the charge density is uniform, than this simplies to:
$$Q_{enc} = \lambda \cdot V$$

# Differnces between Flux
For situations where there is a closed surfrace (box) the flux will always point to this equation:
$$\phi = \frac{Q_{enc}}{\epsilon_0} $$
Since there is always a closed surface the flux will always be defined by this

But for situations where the sufrace is open (sheet) flux points to
$$\phi = \oint E\cdot dA = EAcos(\theta)$$
Since there is no longer a closed sufface we need to make one


# Inf Sheet
If we have an inf sheet and want to find an equation for the electric field. The simplist approch to this is through guasses law. We are going to assume the following:

There is a **uniform** charge density over the inf sheet ($\lambda$)
Our Gaussian surface is a **cylinder** (So the electric is always constant)
The **electric field out the the inf sheet is postive**
![[Pasted image 20250601203703.png]]

First we want to find $Q_{enc}$ 
$$\begin{array}{c} 
Q_{enc}= \int \lambda \cdot dA = \lambda \cdot A \\ 
\text{Note because the charge density is uniform} \\ 
\text{We just needed to intergrate over area}
\end{array}$$
Then we choose a gassian surfrace of a cylinder so the electric was constant

$$\begin{array}{c} 
\oint  E\cdot dA = \frac{Q_{enc}}{\epsilon_0} \\ 
E \oint dA = \frac{Q_{enc}}{\epsilon_0}  \\
\text{If we imagine intergrating over this} \\ 
\text{Than there is an electric field point out on both sides} \\ 
2EA = \frac{\lambda A}{\epsilon_0} \\ 
E =  \frac{\lambda}{2\epsilon_0 }
\end{array}$$

# Uniform Charge Line
If we have an uniform charge line, that has a uniform charge density we can find the electric field the same way.

Were going to assume that following:
**Uniform charge density** present 
$Q_{enc} = \lambda L$ 
Were going to use a cylinder Gaussian surface with an area of $2\pi r L$

![[Pasted image 20250601203940.png]]

Since we already assumed Q enclosed were just going to intergrate to find the electric field using our known cylinder area.

$$\begin{array}{c}
\oint \vec{E} \cdot \vec{dA} = \frac{Q_{enc}}{\epsilon_0} \\ 
\text{Assume a cylinder as gassian surface} \\ 
E \oint dA =  \frac{Q_{enc}}{\epsilon_0} \\ 
E A = \frac{Q_{enc}}{\epsilon_0} \\ 
E\cdot 2\pi rL = \frac{\lambda L}{\epsilon_0} \\ 
E = \frac{\lambda }{2\pi r \epsilon_0}
\end{array}$$
