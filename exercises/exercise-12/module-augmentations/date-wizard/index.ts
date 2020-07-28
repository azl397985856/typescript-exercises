// This enabled module augmentation mode.
import "date-wizard";

declare module "date-wizard" {
  // Add your module extensions here.
  function pad(n: number): string;
  function dateDetails(
    date: Date
  ): {
    year: number;
    month: number;
    date: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
}
