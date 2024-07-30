class RS422:
    def __init__(
        self,
        i_d: str = None,
        channel_number: int = None,
        baude_rate: int = None,
        parity: int = None,
        stop_bit: int = None,
        delay: int = None,
    ) -> None:
        self.i_d = i_d
        self.channel_number = channel_number
        self.baude_rate = baude_rate
        self.parity = parity
        self.stop_bit = stop_bit
        self.delay = delay

    def setParam(
        self,
        i_d: str = None,
        channel_number: int = None,
        baude_rate: int = None,
        parity: int = None,
        stop_bit: int = None,
        delay: int = None,
    ):
        if i_d != None:
            self.i_d = i_d
        if channel_number != None:
            self.channel_number = channel_number
        if baude_rate != None:
            self.baude_rate = baude_rate
        if parity != None:
            self.parity = parity
        if stop_bit != None:
            self.stop_bit = stop_bit
        if delay != None:
            self.delay = delay

        print(
            " inside rs422.setParam(): i_d:",
            self.i_d,
            " channel_number:",
            self.channel_number,
            " baude_rate:",
            self.baude_rate,
            " parity:",
            self.parity,
            " stop_bit:",
            self.stop_bit,
            " delay:",
            self.delay,
        )


rs422 = RS422()
