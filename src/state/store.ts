export interface PowerUpStore {
  isFetchingPowerUps: boolean;
  powerups: PowerUp[];

  activePowerUpPurchase?: string;
  purchaseSuccess?: boolean;
}

export interface PowerUp {
  id: string;
  iconUrl: string;
  name: string;
  description: string;
  price: number;
  quantities: number[];
}

export interface Purchase {
  id: string;
  quantity: number;
}

export const defaultPowerUpStoreState: PowerUpStore = {
  isFetchingPowerUps: false,
  powerups: [],

  activePowerUpPurchase: undefined,
  purchaseSuccess: undefined,
};
