
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
Moment of inertia describes how a body mass is disturbed about a reference point. The reference axis is completely arbitrary in that it can be defined.

The mathematical notion for a system of point masses is defined as the following

$$
I_{0}= \sum_{i} m_{i}{r_{i}^2}
$$

Where the distance $\vec{r}$ is from an arbitrary reference point times the mass. This is added to every mass and distance in a system.  

> [!note]
The moment of inertia cannot be derived like is normally done. Its a definition to simply [[Rotational Kinetic Energy & Work-Energy Theorem|rotational kinetic energy]].

![[tor_3.png|350]]
[^1]
>[!note] Explanation
Example of MOI in a multiple-body situation.

# Examples 

>  The following examples are taken from R. Epp's lecture notes. Steps to the solutions are my own interpretation.

>[!example] Moment of inertia Example
>In the multiple body example, if we don't know the point of rotation or the CM, we assume a point of rotation.
>
![[mom_1.png]]
>
If we assume we dont know where the point of rotation is and are solving for the CM, well assume the 2m mass to be the zero point. So we get the CM as:
>$$x_{cm} = \frac{\sum m_i x_i}{\sum m_i} = \frac{2m(0) + mL}{2m+m} = \frac{1}{3}L$$
>
Now we can find the inertia CM.
>$$I = \sum m_i r_i ^2 = (2m)(\frac{1}{3}L)^2 + m(\frac{2}{3}L)^2 = \frac{2}{3}mL^2$$

>[!example] Massive Pulley
In a pulley system where we assume the pulley mass and mass on a string. The pulley is rotating and the mass is falling. **The rate of acceleration at which they rotate / fall are the same.** 
>
**We are going to solve for acceleration**
>
![[mom_2.png]]
![[mom_3.png]]
>
>
>- For the block falling down we assume [[Forces]] 
>- For the rotating block we assume Torque 
>- We assume the rate of acceleration are the same  
>
>$$\begin{array}{c}
1 ) T = mg -ma \\ 
2) \tau = RT \\ \\
\tau = R(mg-ma) \\ 
\tau = mgR -mR^2\alpha \\ 
I\alpha +mR^2\alpha = mgR \\ 
\alpha(I+mR^2) = mgR \\
\alpha = \frac{mgR}{I+mR^2}
\end{array}$$


# Resources
<iframe width="560" height="315" src="https://www.youtube.com/embed/MboG3SWdh2U?si=pxs-NDEAN7pI_27m" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


[^1]: Taken from R. Epp Lecture notes.

---

🧪 Think this could help someone else?  
[Star Math & Matter on Github](https://github.com/rajeevphysics/Obsidan-MathMatter) to help more learners discover it.

---
