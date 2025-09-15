---
obsidian-note-status:
  - custom-publishing:Awaiting Summary
---

> [!summary]
Moment of inertia describes how resistant a rigid body is to rotation.
> 
**Key Equations:**
> 
Moment of inertia:
$I_{0}= \sum_{i} m_{i}{r_{i}^2}$

>[!info]+ Read Time
**⏱ 2 mins**

# Moment of Inertia 
Moment of inertia (MOI) sometimes called rotational inertia, describes how a body mass is disturbed relative to an axis. The reference axis is completely arbitrary in that it can be defined. The mathematical definition is derived to simplify [[Rotational Kinetic Energy & Work-Energy Theorem|rotational kinetic energy]], defined below.

$$
\begin{array}{c} \\
\text{Descrite Masses} \\
I_{0}= \displaystyle \sum_{i} m_{i}{r_{i}^2}  \\
 \\  \text{Continous Masses}
 \\
I_{0} = \displaystyle\int r^2 dm
\end{array}
$$

> [!note]+ Rotational Inertia Diagram 
![[ri_1.png|500]]
[^2]
Example of rotational inertia for a hollow cylinder. The reference axis is chosen for $r$ to be equal distance to the closest $m_{i}$ around the circle

> [!bug] Common Misconception 
Moment of inertia describes how mass is disturbed relative to an axis. 
[[Center of Mass|Center of Mass]] describes a point where you can imagine all the mass to be located at. 
# Examples 

>[!example] Moment of inertia Example[^1]
>In the multiple body example, if we don't know the point of rotation or the CM, we assume a point of rotation.
>
>![[mom_1.png]]
>
If we assume we dont know where the point of rotation is and are solving for the CM, well assume the 2m mass to be the zero point. So we get the CM as:
>$$x_{cm} = \frac{\sum m_i x_i}{\sum m_i} = \frac{2m(0) + mL}{2m+m} = \frac{1}{3}L$$
>
Now we can find the inertia CM.
>$$I = \sum m_i r_i ^2 = (2m)(\frac{1}{3}L)^2 + m(\frac{2}{3}L)^2 = \frac{2}{3}mL^2$$



# Resources
<iframe width="560" height="315" src="https://www.youtube.com/embed/MboG3SWdh2U?si=pxs-NDEAN7pI_27m" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

[^1]: The following examples are taken from R. Epp's lecture notes. Steps to the solutions are my own interpretation.

[^2]: Taken from https://tikz.net/dynamics_moment_of_inertia_mini/ by Izaak Neutelings (January 2021)
