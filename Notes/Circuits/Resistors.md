
> [!summary]
Resistors are a component in circuits that reduce the flow of current.
> 
**Key equations:**
> 
Resistors in series:
$R_T =  R_1 + R_2$
> 
Resistors in parallel:
$\frac{1}{R_{T}}=\frac{1}{R_1}+\frac{1}{R_2}$

>[!info]+ Read Time
**⏱ 2 mins**

# Definition 
Resistors are a type of object used in [[Circuits|circuits]]. They reduce the flow of [[Current|current]]. Current gets reduced because of the [[Insulators|insulating]] material that resistors are made of. It's common to call reducing the flow of electrons [[Resistance|resistance]] because of this. 

Resistors reduce the flow of electrons by converting the energy of electron collisions into heat.

# Resistors In Series
![[res_1.png]]
[^1]

For resistors in series, the current through each resistor is the same. Since they share the same wire. This means that our total [[Potential Difference|potential difference]] of the circuit will be the potential difference of each resistor.

>[!warning] Assumption
Recall from [[Ohm's Law|ohm law]] that $V = IR$ 

$$\begin{array}{c} 
V_{T} = V_{1}+V_{2} + V_{3}\\
\cancel{I}R_T = \cancel{I}R_1 + \cancel{I}R_2 \\ 
R_T =  R_1 + R_2
\end{array}$$
# Parallel Resistors
![[res_2.png]]
[^2]

For resistors in parallel the [[Potential Difference|potential difference]] for each resistor is the same. Meaning that our total current is the sum of the junctions by [[Kirchhoff's Laws]].

>[!warning] Assumption
Recall from [[Ohm's Law|ohm law]] that $V = IR$ 

$$
\begin{array}{c}
I_T = I_1 + I_2 \\ 
\frac{\cancel{V}}{R_T} = \frac{\cancel{V}}{R_2} + \frac{\cancel{V}}{R_2} \\ 
\frac{1}{R_{T}}=\frac{1}{R_1}+\frac{1}{R_2} 
\end{array}
$$

# Resources
<iframe width="560" height="315" src="https://www.youtube.com/embed/yF7ADcRt_uA?si=xuuFL34LA-vKHOfU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


---

> 📚 Like this note? [Star the GitHub repo](https://github.com/rajeevphysics/Obsidian-MathMatter) to support the project and help others discover it!

---

[^1]: Taken from https://tikz.net/electric_circuit_resistor/ by  Izaak Neutelings (Februari, 2020) 

[^2]: Adapted from https://tikz.net/electric_circuit_resistor/ by  Izaak Neutelings (Februari, 2020)
