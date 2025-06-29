 
>[!summary]
Rolling motion with no slipping is motion consistent of translation and rotational motion and describes the motion of rolling objects.
>
**Key equations (If we assume no slipping):**
>
**Rolling Analysis**:
Any equation from [[Rotational Dynamics]] & [[Moment of Inertia & Torque]]
>
**Translation & Rotational Analysis:**
Any equations from [[Rotational Kinematics]]
Any equation from [[Kinematics]]

>[!info]+ Read Time
**⏱ 3 mins**
# General Principle
Rolling motion describes the motion of rolling object that exhibit two types of motion, transnational and rolling. (eg. rolling ball)

If an object has rolling motion behaviour you should break up the statement into transitional using [[Kinematics]] and rolling using [[Rotational Kinematics]] or [[Rotational Dynamics]]

>[!warning] Rotational Kinematics Only Applies to no slipping
Note that rolling kinematics can only be applied to rolling motion with no slipping. 

![[rol_1.png]]
[^1]
>[!note] Explanation
Rolling motion is translation and rotational (Assume no slipping)

## Translational 
In the example above the object will have a v to the right, of the same length and at the top, middle and bottom because the whole object is moving to the right. The magnitude would be the same because the whole object is moving to the right together.

**Key equations:**
Because we use translation motion we use [[Kinematics]] equations
## Rotational 
In the example if you imagine a ball only rotating not moving. The middle will have some rotational speed (assume its rotating clockwise) so that $v = \omega R$ to satisfy [[Rotational Kinematics]]

If the middle is spinning clockwise with some velocity. Start from the **top** it will have a **velocity to the right**. 

At the **bottom** it will have a **velocity to the left**, since its spinning clockwise.

**Key equations:**
Because we use rotational motion we use [[Rotational Kinematics]] equations
## Rolling Dynamics 
In the first part of the example, if you combine the translation and rotational equations then you have a object that has both rotational and transnational, or something that is experiencing [[Rotational Dynamics]] and [[Moment of Inertia & Torque]].

**Key equations:**
If we use rolling dynamics then we use [[Rotational Dynamics]] & [[Moment of Inertia & Torque]] equations

>[!bug] Important Note
For problem if you use a rolling dynamics analysis you can't use equations from rotational & translational. Visa-versa for the other way around.


>[!example] Rolling Motion Example Using Rolling Analysis 
![[rol_2.png]]
Find acceleration of this rolling object going down using rolling analysis.
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

[^1]: Taken from R. Epp Lecture notes.

---

> 💡 Found this concept helpful? [Star Math & Matter on GitHub](https://github.com/rajeevphysics/Obsidan-MathMatter) to support more intuitive science breakdowns like this.

---
