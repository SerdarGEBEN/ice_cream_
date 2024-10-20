import { fireEvent, render, screen } from "@testing-library/react";
import Form from ".";

test("Koşulların onay durumuna göre buton aktifliği", () => {
  //1) test edilecek bileşen render'lanır
  render(<Form />);

  //2) gerekli elementleri çağır (button | checkbox)
  const button = screen.getByRole("button");
  const checkbox = screen.getByRole("checkbox");

  // 3)checkbox tiklenmemiştir
  expect(checkbox).not.toBeChecked();

  // 4) buton inaktiftir
  expect(button).toBeDisabled();

  // 5) ceckbox'ı tikle
  fireEvent.click(checkbox);

  // 6) buton aktif mi kontrol et
  expect(button).toBeEnabled();

  // 7)checkbox dan tiki kaldır
  fireEvent.click(checkbox);

  // 8) buton inaktif mi kontrol et
  expect(button).toBeDisabled();
});

test("Butonun hover durumuna göre bildirim ekrana gelir", () => {
  render(<Form />);

  //gerekli elementleri al
  const checkbox = screen.getByRole("checkbox");
  const button = screen.getByRole("button");
  const alert = screen.getByText(/size gerçekten/i);

  // bildirim ekranda gözükmüyordur
  expect(alert).not.toBeVisible();

  // checkboxı tikle
  fireEvent.click(checkbox);

  // mouse'u buttonun üzerine getir (hover)
  fireEvent.mouseEnter(button);

  // ekranda bildirim var mı kontrolü
  expect(alert).toBeVisible();

  // mouse'e butondan çek
  fireEvent.mouseLeave(button);

  // bildirim ekranda gözükmüyordur
  expect(alert).not.toBeVisible();
});