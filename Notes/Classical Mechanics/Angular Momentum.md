
>[!summary]
Angular momentum is used to describe how much force an object has when rotating.
>
This type of momentum is not always conserved nor is an intrinsic property
>
A object can be moving linear but still have angular momentum 
>
>
**Key equations:**
**In** general this equation is true:
$L  = \vec{r} \times p$
>
Special case where a body is rotating symmetrically:
$L = I\omega$

# General Principle
Angular momentum is used to describe an how much force an object has when rotating. It's similar to [[Linear Momentum]] in that it **can be** a conversed quantity but is **not an intrinsic property nor is always conserved!** 

>[!warning] Angular momentum does not **ALWAYS** mean spinning in a circle
Although most situations of angular momentum is a object spinning in a circle hence having angular momentum. You can also have angular momentum if a object has [[Linear Momentum]] and has a side-way component (not moving straight)

![[ang_1.png]]
[^1]
>[!note] Explanation
Example of angular momentum

Angular momentum determine how much a object has rotational motion and how hard it will be to stop that.

In our definition we use [[Linear Momentum]] crossed with the r vector. We do this because the r vector will determine the radius a object would rotate around some origin.
We can choose any arbitrary origin point.

$$L  = \vec{r} \times p$$

![[ang_4.png]]
[^2]
>[!note] Explanation
Example of angular momentum 

# Special Case For Rotating Rigid Bodies
>[!warning] Assumption
For this special case well assume that our object is rotating symmetrically and the equation derived is for this special case (assume origin in the middle)
>
$v = \omega \times r$ from [[Rotational Kinematics]] not assuming $\omega$ and r are always perp from each other.

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
Angular momentum is conversed in special cases where we allow the center-mass (CM) to rotate systmmertaly.

>[!warning] Assumptions
In order to solve for $v, v', \omega$ well need to assume converation of linear and angular momentum from [[Equilibrium]] and [[Linear Momentum]] along with conservation of energy from [[Work, Energy & Power]] (The example is not in equilibrium, but uses equations from it )


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
Using conversation of energy from [[Work, Energy & Power]] well assume our system is made up of pure kinetic energy from linear and angular motion. (From [[Rotational Dynamics]] and idea from [[Rolling Motion With No Slipping]])

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

[^1]: Taken from R. Epp Lecture notes refer to [[References & License]] for more information.

[^2]: Taken from https://tikz.net/dynamics_angular_momentum/ from Izaak Neutelings (October 2020)
