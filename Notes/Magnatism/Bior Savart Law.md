
>[!summary]
Similar to how [[Ampere Law]] and [[Gauss's Law]] but is the most general equation for solving for magnetic fields. **Good for finding magnetic fields through a closed circular loop (ampere law doesnt work)**
# General Equation

$$\begin{array}{c} 
dB = \frac{\mu _0 i \space dr \times \hat{r}}{4\pi R^3} \\ 
B = \int dB \\ 
\text{Solve for B using this approch}
\end{array} $$

# Example
Lets suppose to find the magnetic field around a cirlicar current carrying wire.  [[Ampere Law]] Doesnt work here since its a cirlcar current 
If you know the radius, current (i) and the end points we can use this general sol
$$\begin{array}{c} 
dB = \frac{\mu _0 i \space dr \times r}{4\pi R^2} \\ 
dB = \frac{\mu _0 i \space d\theta R}{4\pi R^2} \\
\text{Using the arugment to find $d\theta$ because its over a circle}  \\ \\

B = \frac{\mu _0i} {4\pi R} \hat{r}\int_0^{2\pi} d\theta \\
B = \frac{\mu_0i  }{2R}
\end{array}$$

