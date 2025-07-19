
>[!summary]
A dipole is any arrangement of two equal charges but opposite signs. The field lines always point from positive to negative charge.
>
A dipole in an electric field will experience a torque along with a force from the electric field. If a torque is produced, there will be a potential energy created depending on the direction of the torque. 
>
**Key equations:**
>
Dipole moment:
$p = qd$
>
Torque on dipole:
$\tau = pE sin(\theta)$
>
Potential energy:
$U = -p \cdot E$

>[!info]+ Read Time
**⏱ 3 mins**

# Definition 
A dipole is any arrangement of two equal in magnitude but opposite sign [[Charge]]. 
**The field lines always point from a + charge to a - charge.**

![[dip_2.png | 400]]
[^1]
>[!note] Explanation
Example of a dipole

We define a dipole moment as the amount of force in-between the two charges. Mathematically, we define this as the distance between two charges, and the charge.

$$
p = qd
$$

# Torque on Dipoles
When you place a dipole in an electric field, the field produces a force on both parts of the dipole. That force will cancel each other, but the [[! Moment of Inertia#Torque|torque]] will add up.

>[!warning] Assumptions
Recall that [[! Moment of Inertia#Torque|torque]] is the defined by the [[!Cross Product|cross product]] of force and distance

$$
\begin{array}{c}
\tau = \vec{p} \times \vec{E} \\ 
\tau = pE sin(\theta)
\end{array}
$$

![[dip_1.png]]
[^1]
>[!note] Explanation
A dipole in an electric field exerts. The force produced by the electric field is cancelled out

# Potential Energy of A Dipole
>[!warning] Assumption
If there is a [[! Moment of Inertia#Torque|torque]] on the dipole, then there must be some [[Electric Potential Energy|potential energy]] of the dipole.
> 
The [[Electric Potential Energy|potential energy]] of a dipole is found from the argument that 
$\Delta U = -W$ and that $dW = \tau d\phi$  

We integrate to find the [[Work#Work|work]] needed, and our potential energy will be the negative of work because in order to decrease the potential energy, negative work must be done (it naturally will do this)

$$W = \int dW = \int_{\phi_1} ^ {\phi_2}  pEsin\theta  d\phi= pE(cos\phi _1 - cos\phi _2)$$

so:
$$\begin {array} {c}
U = -pE cos(\theta)\\
U = -p \cdot E
\end{array}$$

>[!bug] Special Note
In order to get higher potential energy you have to do work on the object, which is not naturally done. And lower the potential energy is naturally done.
>
Also notice that our potential energy is the [[Dots Product & Angles|dot product]] of $p$ and $E$ which is most commonly how its formatted

# Resources 
<iframe width="560" height="315" src="https://www.youtube.com/embed/UFqTFhoS0sM?si=Bje7NYKoCaWc8GL9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


---

> 🧠 Enjoy this walkthrough? [Support Math & Matter](https://github.com/rajeevphysics/Obsidan-MathMatter) with a star and help others learn more easily.

---

[^1]: Taken from https://tikz.net/electric_dipole/ by Izaak Neutelings (July 2018)
