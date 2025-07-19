
> [!summary]
Capacitance is the measure of charge per volt in a capacitor
> 
**Key equations:**
> 
Capacitance:
$C = \frac{Q}{V}$
> 
Capacitance for parallel plates:
$C=\frac{\epsilon_0A}{d}$

>[!info]+ Read Time
**⏱ 2 mins**

# Definition 
Capacitance is a measure of how much charge a [[Capacitors|capacitor]] can hold per [[Volt|volt]]. Volts are the [[Potential Difference|potential difference]] between the plates of a [[Capacitors|capacitor]]. 

$$
C = \frac{Q}{V}
$$

# Deriving Capacitance for Parallel Plates
>[!warning] Assumptions
To find the capacitance, assume that the plates are even and symmetric. Allowing arguments from [[Gauss's Law|Gauss's law]]. 

$$\begin{array}{c}
\text{Use Gauss's Law arguments for two plates} \\ 
\oint \vec{E}\cdot \vec{dA} = \frac{Q_{enc}}{\epsilon_0} \\ 
\text{Well assume our Gaussian surface as some closed square with area A.
} \\ \text{Well use this same argument for finding the Q} \\ \\
Q_{enc} = \lambda A \\\\

\text{Where our charge density $\lambda$ is defined through the area. Solving for the electric field} \\\\

\oint \vec{E}\cdot \vec{dA} = \frac{Q_{enc}}{\epsilon_0} \\
\vec{E} \cdot A= \frac{\lambda A}{\epsilon_0} \\ 
\vec{E} = \frac{\lambda}{\epsilon_0}
\end{array}$$

>[!bug] Note 
> 
Recall the equation from [[Electric Potential]] ($\Delta V=\frac{\Delta U}{q_0}=-\int_a^b E\cdot ds$)
> 
We will want our $Q$ in terms of the electric field (for the later part of this derivation)so we will solve for $Q_{enc}$ in terms of the electric field.

$$\begin{array}{c}
EA = \frac{Q_{enc}}{\epsilon_0} \\ 
Q_{enc} = EA\epsilon_0 \\ \\
\text{So then our electric potential is} \\\\
\Delta V = -\int_{a}^b \vec{E}\cdot\vec{ds} \\ 
\end{array}$$

>[!bug] Note
> Assume that the [[Electric Fields|electric field]] is constant through a to b and total distance is $d$
We're going to assume our starting point is from the positive plate to negative plate, but our displacement starts from the negative plate to positive.

$$
\begin{array}{c} \\
\text{Now our electric potential is:} \\
V = \vec{E} d \\
\\ 
\text{Now using our defintion of capacitance:}\\
C=\frac{Q}{V}=\frac{EA\epsilon_0}{Ed}=\frac{\epsilon_0A}{d}
\end{array}
$$

# Resources
<iframe width="560" height="315" src="https://www.youtube.com/embed/f_MZNsEqyQw?si=wlkZmT4pyZPcSny0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


---

> 📚 Like this note? [Star the GitHub repo](https://github.com/rajeevphysics/Obsidian-MathMatter) to support the project and help others discover it!

---
