#include <iostream>
#include <cstdlib>
#include <ctime>
#include <conio.h>  // Для обработки клавиши Esc

void playGuessGame() {
    std::srand(static_cast<unsigned int>(std::time(nullptr)));
    int secretNumber = std::rand() % 10 + 1;  // Теперь числа от 1 до 10
    int guess;
    int attempts = 0;

    std::cout << "=== Игра 'Угадай число' ===\n";
    std::cout << "Программа загадала число от 1 до 10.\n";
    std::cout << "Нажмите Esc для выхода.\n";

    while (true) {
        if (_kbhit() && _getch() == 27) {  // 27 - код Esc
            std::cout << "\nВыход из игры.\n";
            return;
        }

        std::cout << "Введите число: ";
        std::cin >> guess;

        if (std::cin.fail()) {
            std::cin.clear();
            std::cin.ignore(10000, '\n');
            std::cout << "Ошибка ввода! Введите число.\n";
            continue;
        }

        attempts++;

        if (guess < secretNumber) {
            std::cout << "Загаданное число больше!\n";
        } else if (guess > secretNumber) {
            std::cout << "Загаданное число меньше!\n";
        } else {
            std::cout << "Поздравляем! Вы угадали число за " << attempts << " попыток!\n";
            break;
        }
    }
}

int main() {
    char playAgain;
    do {
        playGuessGame();
        std::cout << "\nХотите сыграть ещё раз? (y/n): ";
        std::cin >> playAgain;
    } while (playAgain == 'y' || playAgain == 'Y');

    std::cout << "Спасибо за игру!\n";
    return 0;
}
