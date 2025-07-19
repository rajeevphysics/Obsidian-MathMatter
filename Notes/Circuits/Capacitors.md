
> [!summary]
A capacitor is two conducting plates separated by a distance. The distance between two plates can be covered by air or dielectrics. Each plate will have equal charges.
> 
A charged capacitor is when a capacitor is placed in a closed circuit with current. Each plate will have the same magnitude but opposite charges. In distance between each plate will generate an electric field.
> 
Capacitors in parallel have the same voltage, while capacitors in series have the same current.
> 
> 
**Key equations:**
> 
Energy stored in capacitors
$W = \frac{Q^2}{2C}$
> 
Capacitors in parallel:
$C_T = C_1 + C_2$
> 
Capacitors in series:
$\frac{1}{C}=\frac{1}{C_1}+\frac{1}{C_2}$

>[!info]+ Read Time
**⏱ 4 mins**

# Definition 
A capacitor is two [[Conductors|conducting]] plates separated by air or a [[! Dielectrics|dielectric]]. In a charged capacitor, the plates hold equal and opposite charges.

This only occurs when a capacitor is placed in a closed circuit, where [[Current|current]] is moving. Whereas if a capacitor is in a circuit where current isn't moving, both plates will have equal magnitude and equal charges.

![[cap_1.png]]
[^1]

> [!warning] How is a Capacitor Charged
Refer to the figure below.
> 
A capacitor becomes a charged capacitor when it's placed in a circuit with current. When the current is started, the negative part of the battery will attract positive charges from the bottom plate. Where the opposite happens at the top plate. This effect creates a difference in both plates.
> 
![[cap_5.png|400]]


> [!note]
A charged capacitor will create an electric field between the plates. This is due to the charge difference in the plates.
>
>
![[cap_2.png| 400]] 

# Deriving Energy Stored in Capacitors
> [!warning] Assumptions
Energy stored in a capacitor is the work done on the capacitor to charge it. 
To find energy stored in a capacitor, assume the following:
> - Work is given by $W = \int{F \cdot ds}$  and in electrostatics $W = \int{V(q)dQ}$ from [[Electric Potential Energy]]
> - The "[[Newton Laws|force]]" is potential per unit of charge, so voltage depends on how much is on the plate
> - Our displacement is over added charges, so integrate over $dQ$
> - [[Capacitance]] is $C = \frac{Q}{V}$ or $V=\frac{Q}{C}$

$$
\begin{align*}
W &= \int_0^Q V(Q) \, dQ \\
  &= \int_0^Q \frac{Q}{C} \, dQ \\
  &= \frac{1}{C} \int_0^Q Q \, dQ \\
  &= \frac{1}{C} \left[ \frac{Q^2}{2} \right]_0^Q \\
  &= \frac{Q^2}{2C}
\end{align*}
$$
# Deriving Capacitors in Series
![[cap_3.png]] [^2]
>[!note] Explanation
Capacitors in series share the same line of wire

Capacitors in series have the same amount of [[Current|current]] flow. Which means the same amount of [[Charge|charges]] are moved away and towards each capacitor. Each capacitor resists a charge buildup differently because of [[Capacitance|capacitance]]. So, each capacitor has its own voltage, and those voltages add up to match the applied voltage.

$$\begin{array}{c} 
V = V_1 + V_2  + V_3 \\ 
\text{Voltage adds up since the total voltage from the battery goes into the battery} \\  \text{Charge in the system is the same}
\\ \\
V = \frac{Q}{C} \\ \text{If we assume the voltage adds up} \\  \text {and our charge Q are the same} \\ \text{then we sub in voltage and simplify}\\
\\ 
\frac{1}{C}=\frac{1}{C_1}+\frac{1}{C_2}
\end{array}$$

# Deriving Capacitors in Parallel 
![[cap_4.png]] [^3]
>[!note] Explanation
Example of capacitors in parallel. The voltage in both capacitors is the same.

Capacitors in parallel have the same amount of voltage (they have the same [[Potential Difference|potential difference]] ). Which means each capacitor will have a different amount of charge depending on its [[Capacitance|capacitance]].


$$\begin{array}{c}
V_T = V_1 = V_2 \\ \\
\text{Because there is nothing else in this circuit, the total charge going in must = total out} \\ \\
Q_T = Q_1 +Q_2 \\ 
Q = CV \\ \\
C_TV = C_1V + C_2V \\ 
C_T = C_1 + C_2
\end{array}$$

# Resources 
<iframe width="560" height="315" src="https://www.youtube.com/embed/Ag2RujOHqJ8?si=Qn-WvPODyzKsKBvQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube.com/embed/BIPi0vXdssE?si=3-A3YbUKAg9FXuW1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


---

> 📚 Like this note? [Star the GitHub repo](https://github.com/rajeevphysics/Obsidian-MathMatter) to support the project and help others discover it!

---

[^1]: Diagram taken from https://tikz.net/capacitors/ by Izaak Neutelings (February 2020)

[^2]: Diagram adapted from https://tikz.net/electric_circuit_capacitors/ by Izaak Neutelings (February, 2020) 

[^3]: Adapted from https://tikz.net/electric_circuit_capacitors/ by by Izaak Neutelings (February, 2020) 

