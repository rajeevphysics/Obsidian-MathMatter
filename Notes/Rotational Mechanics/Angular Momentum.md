
>[!summary]
Angular momentum is used to describe how much force an object has when rotating.
>
This type of momentum is not always conserved, nor is it an intrinsic property
> 
An object can be moving linearly but still have angular momentum 
>
>
**Key equations:**
> 
Angular momentum:
$\vec{L}  = \vec{r} \times \vec{p}$
>
Special case where a body is rotating symmetrically:
$\vec{L} = I\omega$

>[!info]+ Read Time
**⏱ 5 mins**

# Definition
Angular momentum is used to describe how much "hard" it is to give an object rotation. It's similar to [[Linear Momentum|linear momentum]] in that it **can be** a conversed quantity, but is **not an intrinsic property, nor is it always conserved.** It depends on your reference frame.

>[!warning] Angular momentum does not **ALWAYS** mean spinning in a circle
Although most situations of angular momentum involve an object spinning in a circle. You can also have angular momentum if an object has [[Linear Momentum|linear momentum]] and has a sideways component (not moving straight)

Mathematically, angular momentum is the cross product between [[Linear Momentum|linear momentum]] and the r displacement [[Scalar & Vectors|vector]]. The r [[Displacement|displacement]] vector is the reference point, which can be arbitrarily chosen. Meaning certain reference frames will not have angular momentum

$$\vec{L}  = \vec{r} \times \vec{p}$$

![[ang_4.png]]
[^2]
>[!note] Explanation
Example of angular momentum 

# Special Case For Rotating Rigid Bodies
>[!warning] Assumption
For this special case, assume the following:
> -  The object is rotating symmetrically. 
> - The origin at in the middle of the rotating object
> - The rotation can be described from [[Rotational Kinematics|rotational kinematics]] $v = \omega \times r$ 

![[ang_2.png]]
[^1]
>[!note] Explanation
A rotating rigid body rotating symmetrically. 

$$\begin{array}{c}
L = r \times p \\ 
L = r \times (mv) \\ 
L = mr \times (\omega \times r)  \\ 
L = mr^2 \omega \\ 
L = I\omega \\ 
\end{array}$$

# Conservation Important Example 
Angular momentum is conserved in special cases where we allow the center of mass (CM) to rotate symmetrically.

>[!warning] Assumptions
In order to solve for $v, v', \omega$ the following assumptions are necessary: 
> - [[Linear Momentum|Linear momentum]] and [[Angular Momentum|angular momentum]] are conserved
> - [[Work]] is conserved
> - Some objects are in [[! Equilibrium|equilibrium]]


![[ang_3.png]]
[^1]
>[!note] Explanation
Example of a stick and puck collision
The puck reflects while the stick rotates in opposite direction of the reflected puck 
>
**Important:**
The v' velocity is technically to the right!

>[!warning] Conversation of Linear Momentum 
If we isolate the case where $\sum F = 0$ so $\Delta p = 0$

$$\begin{array}{c}
p_i = mv +0 \\ 
p_f = mv' +Mv_{cm} \\ \\
\Delta p = 0\\
mv = mv' +Mv_{cm} \quad(1)
\end{array}$$

>[!warning] Conversation of Angular Momentum 
If we isolate the case where $\sum \tau = 0$ so $\Delta L = 0$ 

$$\begin{array}{c}
L_i = r\times p = hmv \quad \text{Assume into the page is pos} \\ 
L_f = r\times p +I\omega  \quad \text{Assume into the page again}\\ 
L_f = hmv' + I\omega \\ \\
\Delta L = 0 \\ 
hmv = hmv' + I\omega_{cm} \quad (2)\\ 

\end{array}$$

>[!warning] Energy Conversation 
Using [[Conservation of Energy|conversation of energy]] assume the system is made up of pure [[Kinetic Potential Energy & Work-Energy Theorem|kinetic energy]] from linear and angular motion  and idea from [[Rolling Motion With No Slipping|rolling motion]]

$$\begin{array}{c}
K_i = \frac{1}{2}mv^2 + 0 \\ 
K_f = \frac{1}{2}mv'^2 + \frac{1}{2}Mv_{cm}' + \frac{1}{2}I\omega ^2 \\ 
mv^2 = mv'^2_{cm} +\underbrace{\frac{1}{2}Mv_{cm}'}_{Stick \space Translaton} + \underbrace{I\omega ^2_{cm}}_{Stick \space Rotational} \quad (3)\\ 
\end{array}
$$
Using the three equations well solve for $v, v'$ and $\omega$
$$\begin{array}{c}
\text{Rewrite 1,2,3} \\ 
(1) \quad v-v' = \frac{M}{m}v_{cm} \\ 
(2) \quad v-v' = \frac{I}{hm} \omega_{cm} \\ 
(3) \quad (v-v')(v+v) = \frac{M}{m} v_{cm}^2 + \frac{I}{m} \omega_{cm}^2 \\ 
1=> 2 \\ 
\frac{I}{hm} \omega_{cm} = \frac{M}{m}v_{cm} \\ 
\omega_{cm} = \frac{hM}{I} v_{cm} \\ \\

2 = > 3 \\ 
(\frac{I}{mh}\omega_{cm})(v+v') = \frac{M}{m} v_{cm}^2 + \frac{I}{m} \omega_{cm}^2  \\ 
Note : \quad \omega_{cm} = \frac{hM}{I} v_{cm} \\ 
(\frac{M}{m}v_{cm})(v+v') = \frac{M}{m} v_{cm}^2 + \frac{M^2 h^2}{m}v_{cm} ^2 \\ 
(v +v') = v_{cm} + \frac{Mh^2}{I}v_{cm} \\ 
(v+v') = (1+\frac{Mh^2}{I}) v_{cm}


\end{array}$$
>[!bug] Warning
We know the following things so far:
>$$\begin{array}{c}
(v+v') = (1+\frac{Mh^2}{I}v_{cm}) \\ 
(v-v') = \frac{M}{m}v_{cm}\\\\
\text{Then we will create two new equations from this defniation} \\ 
(v+v') +(v-v') = 2v \\ 
(v+v') - (v-v') = 2v' \\ 
\end{array}$$

$$\begin{array}{c}
(1+\frac{Mh^2}{I}v_{cm}) + \frac{M}{m}v_{cm} = 2v \\ 
v_{cm}(1+\frac{Mh^2}{I} + \frac{M}{m}) = 2v \\ 
v_{cm} = \frac{2}{(1+\frac{Mh^2}{I} + \frac{M}{m})} v \\ \\

(1+\frac{Mh^2}{I}v_{cm}) - \frac{M}{m}v_{cm} = 2v' \\ 
v_{cm}(1+\frac{Mh^2}{I} - \frac{M}{m} ) = 2v' \\ 
v' = \frac{v_{cm}(1+\frac{Mh^2}{I} - \frac{M}{m} )}{2} \\ 
\text{We should sub in vcm in best practices}
\end{array}$$

[^1]: Taken from R. Epp Lecture notes.

[^2]: Taken from https://tikz.net/dynamics_angular_momentum/ from Izaak Neutelings (October 2020)


---

> 📂 Want to see more structured notes like these?  
> Help grow the project by [starring Math & Matter on GitHub](https://github.com/rajeevphysics/Obsidian-MathMatter).

---
