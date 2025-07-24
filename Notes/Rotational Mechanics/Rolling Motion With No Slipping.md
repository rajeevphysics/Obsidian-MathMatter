
> [!summary]
Rolling motion is the motion of a rolling object. An object is rolling if it has a translational and rotational component.
> 
**Key Equations:**
> 
Translational Analysis:
$\Delta x = v_{avg} t$
$\Delta v = a_{avg} t$ 
> 
Rotational Analysis:
$\Delta \theta = \omega \Delta t$
$\Delta \omega = \alpha \Delta t$
> 
Rolling Analysis:
$W= \int_{a}^b \tau \cdot d\theta$
$K=\frac{1}{2}\omega^2 I_{0}$
$W=\Delta K$
$I_{0}= \sum_{i} m_{i}{r_{i}^2}$

>[!info]+ Read Time
**⏱ 3 mins**
# Definition
Rolling motion describes the motion of a rolling object that exhibits two types of motion, translational and rotational. Depending on the problem, rolling motion can be split into translation and rotational motion, using displacement, velocity and acceleration. Or use a rolling dynamics approach, which uses an energy approach.

>[!warning] Rotational Kinematics Only Applies to no slipping
Note that rolling kinematics can only be applied to rolling motion with no slipping. 

![[rol_1.png]]
[^1]
>[!note] Explanation
Rolling motion is translation and rotational (Assume no slipping)

## Translational Analysis 
Translation analysis is an object displacement only takes into account only the linear velocity and linear displacement (kinematics). In translational motion, it's assumed the object is not spinning.

In the example above, the object will have a $v$ to the right, of the same length and at the top, middle and bottom because the whole object is moving to the right. The magnitude would be the same because the whole object is moving to the right together.

### Key Equations
Translational analysis is a kinematic analysis, so some generlized equations are the following:

-  $\Delta x = v_{avg} t$
-  $\Delta v = a_{avg} t$ 

## Rotational Analysis
Rotational analysis is an object. It only takes into account an object's behaviour as it is spinning (rotational kinematics). It's assumed the object is not moving translational and is only spinning.

In the example, if you imagine a ball only rotating, not moving. The middle will have some rotational speed (assume it's rotating clockwise) so that $v = \omega R$. If the middle is spinning clockwise with some velocity. Start from the **top**, it will have a **velocity to the right**. At the **bottom**, it will have a **velocity to the left**, since it's spinning clockwise.

### Key Equations
Rotational analysis is a rotational kinematic analysis so some generalized equations are the following:

-  $\Delta \theta = \omega \Delta t$
-  $\Delta \omega = \alpha \Delta t$

## Rolling Analysis 
Rolling analysis uses rotational energy, work and moment of inertia to describe how an object will rotate over some time.

### Key Equations
Rolling analysis is a rotational energy, work & moment of inertia analysis, so some generalized equations are the following:
-  From rotational work $W= \int_{a}^b \tau \cdot d\theta$
- Rotational kinetic energy energy is  $K=\frac{1}{2}\omega^2 I_{0}$
- Work energy theorem for rotation is defined as $W=\Delta K$
- The moment of inertia is defined as  $I_{0}= \sum_{i} m_{i}{r_{i}^2}$

>[!bug] Important Note for analysis
For problems, if you use a rolling dynamics analysis, you can't use equations from rotational & translational. Visa-versa for the other way around.

# Examples

>[!example] Rolling Motion Example Using Rolling Analysis 
![[rol_2.png]]
Find the acceleration of this rolling object going down using rolling analysis.
>
![[rol_4.png]]
Extended body of the figure. 
>
>$$\begin{array}{c}
\tau_{POC} = I_{POC} \alpha \\ 
Rmgsin(\theta) = I_P (\frac{a}{R}) \\ 
a = \frac{mgR^2sin(\theta)}{I_P} \\ 
a = \frac{mgR^2sin(\theta)}{I_P}
\end{array}$$

---

>[!example] Rolling Motion Example using Translation and Rotational Analysis 
![[rol_2.png]]
Find acceleration of this rolling object going down using translation and rotational analysis.
>
**Rotational:**
![[rol_3.png]]
>
>$$\begin{array}{c}
\sum \tau = I_{CM} \alpha \\ 
Rf_s = I_{CM} \frac{\alpha}{R} \\ 
f_s = I_{CM} \frac{\alpha}{R^2} \\ 
\end{array}$$
>
**Translational**
![[rol_5.png]]
>$$\begin{array}{c}
\sum F_x = mgsin(\theta) - f_s \\ 
ma_{cm} = mgsin(\theta) - f_s \\ \\
>
\text{Dont need to solve $\sum F_y$} 
\end{array}$$
>
Use $f_s$ from rotational into translational and solve for a
>
>$$
\begin{array}{c}
ma_{cm} = mgsin(\theta) - I_{cm} \frac{a_{cm}}{R^2}\\
ma_{cm}R^2 = mgsin(\theta)R^2 - I_{cm} a_{cm} \\ 
a_{cm} (mR^2 + I_{cm}) = mgsin(\theta) R^2 \\ 
a_{cm} = \frac{mR^2gsin(\theta)}{mR^2 +I_{cm}} \\\\
I_{POC} = I_{cm} + mR^2 \\ 
a_{cm} = \frac{mgR^2sin(\theta)}{I_P} 
\end{array}$$


# Resources
<iframe width="560" height="315" src="https://www.youtube.com/embed/XPUuF_dECVI?si=n8Asa26CwjHCOYJZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


---

> 🧪 Think this could help someone else? [Star Math & Matter on Github](https://github.com/rajeevphysics/Obsidian-MathMatter) to help more learners discover it.

---

[^1]: Taken from R. Epp Lecture notes.
