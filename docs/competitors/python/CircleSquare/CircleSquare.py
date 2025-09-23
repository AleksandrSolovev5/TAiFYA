import math

try:
    r_input = input("Введите радиус круга: ")
    r = float(r_input)
except ValueError:
    print("Ошибка: введено не число.")
else:
    if r < 0:
        print("Ошибка: радиус не может быть отрицательным.")
    else:
        area = math.pi * r ** 2
        print(f"Площадь круга = {area:.6f}")