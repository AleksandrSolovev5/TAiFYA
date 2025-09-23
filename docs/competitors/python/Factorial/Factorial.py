try:
    n_input = input("Введите целое неотрицательное число: ")
    n = int(n_input) 
except ValueError:
    print("Ошибка: введено не целое число.")
else:
    if n < 0:
        print("Ошибка: число не может быть отрицательным.")
    else:
        factorial = 1
        for i in range(2, n + 1):
            factorial *= i
        print(f"Факториал = {factorial}")
