
>[!summary]
Magnetic force is the force caused by the magnetic field along with the velocity of an electron.
>
Circular motion can be caused by a magnetic field and velocity in some direction along.
>
Helical motion can also be caused by a magnetic field and velocity in two dimensions.
>
The magnetic moment is caused by the spin of electrons.
>
There is a force due to the magnetic field on a straight current carrying wire.
>
**Key rules and equations:**
Right-hand rule to determine the direction of magnetic force, field, and velocity
>
Magnetic Force:
$\vec{F}_{mag} = q\vec{v} \times \vec{B}$
>
Lortez Force:
$\vec{F} = \underbrace{q\vec{E}}_\text{Electric Field} + \underbrace{q(\vec{v} \times \vec{B})}_\text{Force Magnetic }$
>
Magnetic Moment:
$\mu = \frac{q}{2m}L$
>
Force due to a straight current carrying wire:
$\vec{F} = I\vec{l} \times \vec{B}$
>
Force due a curved conductor caused by a mangetic field:
$F =  IB(2R +L)$

# What is Magnetic Force
Magnetic force is the caused by the presence of a magnetic field and a charge moving through it. The magnetic force was first discover experimentally.
$$\vec{F}_{mag} = q\vec{v} \times \vec{B} $$

It can be derived through special relativity, but this note will not derive it. We will assume this is true through experiments.
![[mf_1.png|300]]
[^1]
>[!note] Explanation
Magnetic force right hand rule.
## Lorentz Force
The Lorentz force unifies the [[Electric Force]] and Magnetic force.  Like with magnetic force it was oringally experimentally derived, and can be derived through special relativity, but its not going to derived in this note.

Key equation:
$$\vec{F} = \underbrace{q\vec{E}}_\text{Electric Field} + \underbrace{q(\vec{v} \times \vec{B})}_\text{Force Magnetic }$$
![[mf_2.png]]
[^2]
>[!note] Explanation
Example of a lorentz force with magnetic field and electric field.
## Circular Motion
If a charge is in a magnetic field, a velocity and force perpendicular to the field the charge will rotate around the magnetic field like below.

![[mf_3.png | 500]]
[^4]
>[!note] Explanation
Circular motion caused by a magnetic field and velocity.

If a charge is moving with a velocity and force perpendicular to motion only direction will be effected, and we show this through [[Forces]]

$$ \begin{array}{c}
F_{net} = ma \\
|q|vB = m\frac{v^2}{R} \\ \\
\text{Can solve for V, R,T,f }

\end{array} $$
## Helical Motion
Helical motion occur when there is both a perpendicular and parallel component of velocity in a magnetic field like shown below.
![[mf_5.png]]
[^4]
>[!note] Explanation
Example of helical motion caused by a magnetic field and velocity in two directions.

Perpendicular component of velocity causes it to move in circular motion.
Parallel moves with the magnetic field
Combined forms both at the same time (Helical Motion / Pitch)

# Magnet Moment
When a particle rotates around itself due to [[Properties of Quarks]] and angular momentum (from quantum angular momentum for electrons properties) it creates its own magnetic field

![[mf_4.png]]
[^3]
>[!note] Explanation
Magnetic moment caused by spin of a electron

>[!Warning] Assumptions 
To derive this we assume that from a classical point that:
>$$\begin{array}{c}
I = \frac{q}{T}  \\
T = \frac{2\pi}{\omega} \\ 
\mu = I\cdot A \quad \text {Magnetic Moment of of a loop} \\ 
A = \pi R^2
\end{array}$$

From this we can derive a general expression for the magnetic moment.

$$\begin{array}{c} 
\mu = IA \\ 
\mu = \frac{\omega q\pi R^2}{2\pi} = \frac{\omega q R^2}{2} \\

\text{Now because we assume the particle roation is cauased by angular} \\ 
\text{Momentum (Classical) $L = m\omega r^2$} \\ 
\mu = \frac{q}{2m}L
\end{array}$$

# Force Due to Current Straight Wire
Force due to a straight current carrying wire is due to the current (I), vector point in the direction of current (L), and the magnetic field (B)

$$\vec{F} = I\vec{l} \times \vec{B}$$
![[mf_6.png]]
>[!note] Explanation
Example of the force caused by a straight wire and magnetic field and current.

# Magnetic Force Due to a Curved Conductor 
![[Pasted image 20250602182829.png]]
>[!note] Explanation
Magnetic force over a curved wire

For a magnetic field point out the plane and a current (I) like this we need to find the total force by integrating 

$$\begin{array}{c}
\text{To find total force we need to add:} \\
F = F_1 +F_2+F_3 \\\\
\text{At the start ($I_{in}$ ) and the magnetic field out  }\\
F_1 = IL \times B = ILB(-\hat{z}\times \hat{z}) = 0 \\\\
\text{At the end where the there is a straiht line}\\
F_3 = IL\times B = ILB(-\hat{x}\times \hat{z}) = ILB\hat{y}\\\\
\text{$F_2$ by intergrating, note $R = L\theta$} \\
dL_2 = dL\hat{\theta} = Rd\theta\hat{\theta} \\
dF_2 = IdL\times B =IRBd\theta(\hat{\theta} \times \hat{z}) = IRBd\theta\hat{r}\\\
F_2 = \int_0 ^\pi IRBd\theta\hat{r} \\
F_2 = IRB\int_0 ^\pi d\theta\hat{r} \\
= IRB \int_0 ^\pi d\theta(cos\theta\hat{x} +sin\theta\hat{y}) \\ 
= 2IRB\hat{y} \\\\

\text{Recalling what we said at the start the total force is then}\\
F = 2IRB + IRB = IB(2R +L)

\end{array}$$



[^1]: Taken from https://tikz.net/righthand_rule/ by Izaak Neutelings (July 2018)

[^2]: Taken from https://tikz.net/velocity_selector/ by Izaak Neutelings (March 2020)

[^3]: Taken from. https://tikz.net/magnetic_moment/ by Izaak Neutelings (March 2020)

[^4]: Taken from https://tikz.net/magnetic_field/ by Izaak Neutelings (March 2020)


---

> 📚 Like this note? [Star the GitHub repo](https://github.com/rajeevphysics/Obsidan-MathMatter) to support the project and help others discover it!

---
