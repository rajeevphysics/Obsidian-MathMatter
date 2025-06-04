
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
If there a magnetic moment, current carrying wire and magnetic field in different directions from one another, there will be a torque on the wire to align with the magnetic field.
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
Force due to a straight current carrying wire:
$\vec{F} = I\vec{l} \times \vec{B}$
>
Force due a curved conductor caused by a mangetic field:
$F =  IB(2R +L)$


# Magnetic Force
Note jump to torque: [[Magnetic Force & Torque#Torque on a current Loop]]
The force by a magnetic force is caused by the [[Magnetic Flux & Current]]



$$\vec{F}_{mag} = q\vec{v} \times \vec{B} $$
>[!info]
q is the charge
v is the velocity 
B if magnetic field 

# Lorentz Force
Describes the force due to both a electric field and magnetic field. 
$$\vec{F} = \underbrace{q\vec{E}}_\text{Electric Field} + \underbrace{q(\vec{v} \times \vec{B})}_\text{Force Magnetic }$$
![[Pasted image 20250602175705.png]]
>[!note] Explanation
Example of a lorentz force with magnetic field and electric field.
# Circular Motion
![[Pasted image 20250602180249.png]]
>[!note] Explanation
Circular motion caused by a magnetic field and velocity.

A charge moving with a **velocity** and force perp to motion will only effect the direction of the charge. This is because a force perp to direction will only effect the direction and not the velocity it moves.


$$ \begin{array}{c}
F_{net} = ma \\
|q|vB = m\frac{v^2}{R} \\ \\
\text{Can solve for V, R,T,f }

\end{array} $$
# Magnet Moment
When a particle roates around itself due to [[Quantum Mech Spin Of Electron (Intrinsic angular momentum)]] and angular momentum (from qunatum angular momentum for electrons properties) it creats its own magnetic field
![[Pasted image 20250602181106.png]]
>[!note] Explanation
Magnetic moment caused by spin of a electron

To derive this we assume that from a classical point that:
$$\begin{array}{c}
I = \frac{q}{T}  \\
T = \frac{2\pi}{\omega} \\ 

\mu = I\cdot A \quad \text {Magnetic Moment of of a loop} \\ 
\end{array}$$

From this we can derive a general expression for the magnetic moment. If we assume that area for the magnetic moment is a circle ($\pi R^2$).

$$\begin{array}{c} 
\mu = IA \\ 
\mu = \frac{\omega q\pi R^2}{2\pi} = \frac{\omega q R^2}{2} \\

\text{Now because we assume the particle roation is cauased by angular} \\ 
\text{Momentum (Classical) $L = m\omega r^2$} \\ 
\mu = \frac{q}{2m}L
\end{array}$$
# Helical Motion
Occur when there is both a perp and parrell component of velocity in a magnetic field.
![[Pasted image 20250602181838.png]]
>[!note] Explanation
Example of helical motion caused by a magnetic field and velocity in two directions.

Perp compment of velocity causes it to move in circular motion.
Parallel moves with the magnetic field
Combined forms both at the same time (Helical Motion / Pitch)
# Force Due to Current Straight Wire
Force due to a straight current carrying wire is due to the current (I), vector point in the direciton of current (L), and the magnetic field (B)

$$\vec{F} = I\vec{l} \times \vec{B}$$
![[Pasted image 20250602182210.png]]
>[!note] Explanation
Example of the force caused by a straight wire and magnetic field and current.

# Magnitude of the Magnetic FIeld due to Two wires
If there two wires due to [[Magnetic Flux & Current]] of two single wire creates a force due to one another 

d is the distance
L is the length
i is current of each of the wires

When you find the m
$$F_{b\to1}  = \frac{\mu_o L i_1 i_2}{2\pi d}$$

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

## Torque on a current wire
When you have a current loop and magnet inside the loop with a magnetic field, the magnet moment  ($\mu _0$ / m) created by the current  will experience a torque
$$\begin{array}{c} \vec{\tau} = \vec{\mu_0} \times \vec{B} \\
\vec{\tau} = IBAsin(\theta) \\\\ 
\text{Imporant note:}\\
\mu _0 = I\cdot A
\end{array}$$

The amount of torque is dependent on the angle with the magnet moment and the magnetic field. Max when the angle is 90
![[Pasted image 20250602183440.png]]
>[!note] Explanation
Torque caused by the magnetic field and magnetic moment 


It's zero when the angle is 0 or 180
![[Pasted image 20250602183427.png]]
>[!note] Explanation
Three example of torque on a current carrying wire

We call the **<u>green box</u>** **stable equilibrium** since moving the magnet a small amount away from the magnet field will bring it back (Low potential)

We call the **red box** **unstable equilibrium** since a small disturbance will move the magnet into the green case (High potential energy)

>[!bug] Why is there a magnetic moment due to a closed loop wire
Due to an electric field inside a closed wire caused by special rel and length contraction which in a differnt refernce frames make a magnetic field. [[Magnetic Flux & Current#How does this Happen]] 

# Extra Resources 
>[!info] Video to watch
This video helped me understand this concept by [Khan Academy](https://www.youtube.com/watch?v=hJxCLn4HNQ4&ab_channel=KhanAcademyIndia-English) 
