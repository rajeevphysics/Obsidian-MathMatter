
>[!summary]
Flux is how much of something flows through a surface (Measurement)
It depends on the orientation we use as the surface and the flow 
>
**Key equations:**
Flux for open surfaces:
$\phi = \vec{E}\cdot \vec{A}$
> 
Flux for closed/imaginary surfaces:
$\phi = \oint \vec{E} \cdot \vec{dA}$

>[!info]+ Read Time
**⏱ 3 mins**

# Definition
Flux is seeing how much of something flows in or out of an imaginary surface. **It is a measurement, similar to volume and area**.

We often describe flux as the amount of [[Electric Fields|electric fields]] passing through an area, it is defined mathematically as the [[Dots Product & Angles|dot product]] of the two.

$$
\Phi = \vec{E} \cdot \vec{A} = EAcos(\theta)
$$

Frequently in physics, we define flux from [[Gauss's Law]], where find our flux from a [[Gaussian Surfaces|gaussian surfaces]] defined as:

$$
\Phi = \oint \vec{E} \cdot \vec{dA}
$$

## Orientation 
Flux is dependent on the orientation that our imagery surface covers. This is because of the dot product in our definition.

![[flu_1.png]]
[^1]
>[!note] Explanation
Example of an electric field passing through a surface 

To determine how the orientation affects our flux, imagine a normal vector coming to the imagery area.

Our flux is zero when the angle between the area normal and electric field is 90 degrees. (The area would have been placed flat, not penetrating that field)

![[flu_2.png]]
[^1]
>[!note] Explanation
Example of a electric field passing through an imagry field. In this case the flux would be:
$\Phi = EAcos(\theta)$ 

# Flux in Closed Surfaces (3D)
If we want to find the flux coming into a closed surface, we use the same idea for finding the flux in an electric field, and now consider how that flux is entering or leaving that surface.

For flux **entering** a **surface**, we assume this as a **negative** flux
For flux **leaving** a **surface**, we assume this as a **positive** flux.

>[!example] Determine the flux passing through a 3D rectangle
![[flu_3.png]]
If we assume this image is a rectangle with a electric file direction downward. (Assume E = 3, side length = 2 and longer length = 3)
>
For all the sides perp to the electric field we know the flux will be zero (Area normal is perp to electric field)
>
We only calcaute the flux through the top and bottom surface.
>$$\begin{array}{c} 
\Phi_{top} = E\cdot A =  3 \cdot 3 \cdot cos(0) = -9 
\quad\text{Entering} \\
\Phi_{bottom} = E\cdot A = 3 \cdot 3 \cdot cos(0)= 9 \quad\text{Leaving} \\ \\
\Phi_{total} = \Phi_{top} + \Phi_{bottom} = 0
\end{array}$$


---

📂 Want to see more structured notes like these?  
Help grow the project by [starring Math & Matter on GitHub](https://github.com/rajeevphysics/Obsidan-MathMatter).

---

[^1]: Taken from https://tikz.net/electric_field_plane/ by Izaak Neutelings (November, 2018)
