
>[!summary]
Conductors are a type of materials that transfer something through them.
>
**Key equations:**
>
Electric field of a conductor with empty cavities (Inside and outside the cavity):
$\vec{E} = 0$
>
Electric field of a conductor with a charged cavity:
$\vec{E} = \frac{Q}{4 \pi r^2 \epsilon_0}$ Inside cavity
$\vec{E} = 0$ Outside cavity

>[!info]+ Read Time
**⏱ 4 mins**

# Definition
Conductors are a type of material that transfers something through them (conduct). Often, when using the term conductors, we assume the transfer of electricity ([[Current|current]]), but it can also be the transfer of heat.

Some materials that act as conductors are copper, iron & gold.

# Conductors With Empty Cavities
>[!bug] Note Assumption
Assume that [[Charge|charges]] inside a conductor will move freely until they reach a configuration where it makes the [[Electric Fields|electric field]] inside the conductor zero.

Suppose we have a conductor that has a cavity in it. Inside the cavity, there is no charge.

To find the [[Electric Fields|electric field]] the easiest way if by using [[Gauss's Law|Gauss's law]]. Assuming a spherical Gaussian surface to match with the conductor, there can be two cases. First case of a Gaussian surface inside the cavity and one outside the cavity but inside the conductor.

![[con_1.png|400]]
[^1]
>[!note] Explanation
Example of a hollow cavity (no charge) in the middle of a sphere
## Case 1: Gaussian Surface Inside the Cavity
>[!warning] Assumptions
Assume a Gaussian surface of sphere that expands to the edge of inside the cavity, not touching the rim that the cavity and the rest of the conductor meet.

$$
\begin{array}{c}
\oint \vec{E}\cdot \vec{dA} = \frac{Q_{enc}}{\epsilon _0} \\ 

\text{Because our cavity is empty, $Q_{enc} = 0$} \\ \\

\vec{E} \cdot (4\pi r^2) = \frac{Q_{enc}}{\epsilon_0}\\
\vec{E} \cdot (4\pi r^2) = 0 \\ 
\vec{E} = 0


\end{array}
$$
## Case 2: Gaussian Surface Outside the Cavity 
>[!warning] Assumptions
Assume a Gaussian area a sphere that expands to the edge of the conductor not reaching outside the conductor. Since our Gaussian area is a sphere, the cavity is enclosed in it.
>
Remember at the start of this section we assume that a conductor has enough [[Charge|charges]] to configure charges to create [[! Equilibrium|equilibrium]].

$$
\begin{array}{c}
\oint \vec{E} \cdot \vec{dA} = \frac{Q_enc}{\epsilon_0} \\ 
\text{Our gassian surface enclosed the entire sphere, no free charges so:} \\ \\
Q_{enc} = 0 \\ 

\vec{E} = 0

\end{array}
$$

# Conductors With Charged Cavities
>[!bug] Note Assumption
We are assuming that [[Charge|charges]] inside a conductor will move freely until they reach a configuration where it makes the [[Electric Fields|electric field]] inside the conductor zero ([[! Equilibrium|equilibrium]])

Suppose we have a conductor will a cavity again, but now the cavity has a charge inside. This [[Charge|charges]] inside the conductor will still want to arrange themselves to configure for [[! Equilibrium|equilibrium]]. 

![[con_2.png|400]]
[^1]
>[!note] Explanation
Example of conductor with a charge enclosed in a cavity

If we wanted to find the electric field inside this conductor, there are two cases to use Gauss's law. A case where we choose a spherical Gaussian area inside the cavity and outside the cavity.

## Case 1: Gaussian Surface Inside the Cavity
>[!warning] Assumptions
Assume a spherical gaussian surface inside the cavity (till the edge not touching the conductor part)
>
Assume our charge inside the cavity is $Q$ 

$$
\begin{array}{c}
\oint \vec{E} \cdot \vec{dA} = \frac{Q_{enc}}{\epsilon_0} \\ \\ 
Q_{enc} = +Q \\ 

\oint \vec{E} \cdot \vec{dA} = \frac{Q}{\epsilon_0}  \\
\vec{E} \cdot (4\pi r^2) = \frac{Q}{\epsilon_0} \\ 
\vec{E} = \frac{Q}{4 \pi r^2 \epsilon_0} 

\end{array}
$$

Notice the difference in having [[Conductors#Case 1 Gaussian Surface Inside the Cavity|no charge]] and charge inside the cavity.

## Case 2: Gaussian Surface Outside the Cavity
>[!warning] Assumptions
Assume a spherical Gaussian surface outside the cavity but still inside the conductor.
Assume the charge inside the cavity is still Q
>
Remember at the start of this section we assume that a conductor has enough [[Charge|charges]] to configure charges to create [[! Equilibrium|equilibrium]].

$$
\begin{array}{c}
\oint \vec{E} \cdot \vec{dA} = \frac{Q_{enc}}{\epsilon_0} 
\end{array}
$$
>[!bug] Note
Our $Q_{enc}$ are the charges inside the conductor (including the cavity). The cavity has a charge $Q$ and in order for the conductor to maintain equilibrium the conductor will push $-Q$ towards the edge of the cavity. 
>
Therefore, $Q_{enc} = Q + (-Q) = 0$

$$
\begin{array}{c}
\oint \vec{E} \cdot \vec{dA} = \frac{Q_{enc}}{\epsilon_0} \\ 
\vec{E} \cdot (4\pi r^2) = \frac{0}{\epsilon_0} \\ 
\vec{E} = 0

\end{array}
$$

# Resources
<iframe width="560" height="315" src="https://www.youtube.com/embed/PafSqL1riS4?si=rvvglT-VwcCFqe3O" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/_b9Pldu1vV0?si=mvickm_AOZAlsOzu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


---

> 📚 Like this note? [Star the GitHub repo](https://github.com/rajeevphysics/Obsidan-MathMatter) to support the project and help others discover it!

---

[^1]: Taken from https://tikz.net/electric_field_sphere/?utm_source=chatgpt.com by Izaak Neutelings (February, 2020)
