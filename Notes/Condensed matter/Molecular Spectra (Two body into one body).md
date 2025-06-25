
>[!summary]
Using some combination of logic and math to reduce two body system (two equations for two body) into one equation that still describes the two bodies
>
Key equation:
$\frac{m_1 m_2}{m_1 + m_2} = \mu$
>
Reduced two body:
$\mu \vec{r} = \hat{r}F(r)$
>
Reduced rotational body:
$E_n = (n+\frac{1}{2})\hbar \sqrt{\frac{k}{m}} + i(i+1)(\frac{\hbar ^2}{2I})$
# Two planets interaction
In a two planet interactions with two separate masses and forces, we can reduce this problem into a one-body situation still describing the same motion as a two body.

![[mol_1.png]]
[^1]
>[!note] Explanation
Two masses interact with each other in the r hat direction we assume the direction from m2 to m1 as positive.

$$\begin{array}{c} 

\text{Note the following (Ref to fig below)} \\
\vec{r} = r_1 -r_2 \\
\text{Looking for CM of the two systems}\\\\
m_1 \ddot{r_1} = \hat{r}F(r)\quad (1)\\
m_2 \ddot{r_2} = -\hat{r}F(r) \quad (2) \\
(1)\cdot m_2 -(2\cdot m_1) \\
m_1m_2 \ddot{r_1} - m_1m_2 \ddot{r_2} = m_1 \hat{r} F(r) + m_2 \hat{r} F(r) \\ 
m_1 m_2(\ddot{r_1 }- \ddot{r_2}) = (m_1 + m_2)\hat{r} F(r) \\
\frac{m_1 m_2}{m_1 + m_2}(\vec{r}) = \hat{r} F(r)
\\
\text{let $\frac{m_1 m_2}{m_1 + m_2} = \mu$} \\
\mu \vec{r} = \hat{r}F(r) \\ 

\end{array}$$

![[mol_2.png]]
[^1]
>[!note] Explanation
The two reduced masses have a COM here.

In the solution above we reduced a two body system (two equations) into a one-body still describing the two system but in one equation

# Rotational and vibration two body
Take for example a two particle system that has both rotation and vibrational motion (Like a harmonic oscillator moves back and forth). 

We want to reduce it to a one body, which would just a harmonic oscillator of $m_r$ of the two bodies and with rotation motion.

![[mol_3.png]]
[^1]

From above, we know the reduced mass $\mu = \frac{m_1 m_2}{m_1 + m_2}$ We want the energy that describes both the rotational and oscillatory.

$$\begin{array}{c} 
\text{From a classical approch we know:} \\ 
E_T = E_{vib} + E_{Rot} \\
\text{Because this is particle system we need to find:} \\ 
\text{Rot through classical} \\ 
\text{Vib through qunatum}  \\ 

\\\\ 
E_{rot} = \frac{1}{2} I \omega^2 \\ 
\text{From the defination of angular momentum} \\
L  = I\omega \\
E_{rot} = \frac{L^2}{2I} \\ 
\\
\end{array} $$
For the quantum part we are going to find $E_{vib}$. To do this we need to assume that energy will be quantized so from [[Zero-Point Energy]] generalized equation we can go off it the following:

$$\begin{array}{c} 
E_{vib} = (n+\frac{1}{2})\hbar \omega \\
\text{Note this is vaild because $\omega = 2\pi f$ and $\hbar = \frac{h}{2\pi}$} \\ 
\text{Also we know this acts like a harmoic osicillator so $\omega = \sqrt{{\frac{k}{m}}}$} \\
E_{vib} = (n+\frac{1}{2})\hbar \sqrt{{\frac{k}{m}}}  \\\\

\text{Because this is a particle we need to take into account the qunatum angular momentum} \\ 
L = \sqrt{ i (i+1)} \hbar 



\end{array}$$
Combining **both** the **quantum energy** and **classical energy**, while changing the classical part **taking into account the quantum momentum,** we get the following result:


$$E_n = (n+\frac{1}{2})\hbar \sqrt{\frac{k}{m}} + i(i+1)(\frac{\hbar ^2}{2I})$$

[^1]: Taken from R. Epp Lecture notes.

---

🧪 Think this could help someone else?  
[Star Math & Matter on Github](https://github.com/rajeevphysics/Obsidan-MathMatter) to help more learners discover it.

---
